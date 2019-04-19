const _ = require('lodash')
const pdfToTextService = require('./pdfToText.service');
const comprehendService = require('./comprehend.service');
const rekognitionService = require('./rekognition.service');
const facebookService = require('./facebook.service');
const jobsService = require('./jobs.service');

module.exports.analysis = function (data) {
    return new Promise((resolve, reject) => {
        if (data.length > 0) {
            const jobId = data[0].jobId;
            const resumeUrl = data[0].resume;
            const coverLetterUrl = data[0].coverLetter;
            const profilePicture = data[0].profilePicture;

            console.log(resumeUrl);
            console.log(profilePicture);

            const resumeCall = processResume(resumeUrl);
            const coverLetterCall = processCoverLetter(coverLetterUrl);

            // TODO save userid
            const facebookCall = callFacebookService(data[0].socialMedia[0].authorization.token, "10157024194519043");
            const photoServiceCall = rekognitionService.getFacialAnalysis(data[0].userId, profilePicture.key)

            Promise.all([resumeCall, coverLetterCall, facebookCall, photoServiceCall]).then(result => {
                console.log(result)

                var segmentedResults = {
                    segmented: {
                        resume: result[0],
                        coverLetter: result[1],
                        socialMedia: result[2],
                        profilePicture: result[3]
                    }
                }
                return jobsService.patch(jobId, {
                    scores: segmentedResults
                });

            }).then(response => {
                resolve(response);
            }).catch(e => {
                reject(e);
            });
        }
    });
}

function processResume(resumeUrl) {
    return new Promise((resolve, reject) => {
        pdfToTextService.convertToText(resumeUrl).then(resumeText => {
            return comprehendService.getSentiment(resumeText.text);
        }).then(resumeAnalysis => {
            resolve(resumeAnalysis);
        }).catch(e => {
            reject(e);
        });
    })
}

function processCoverLetter(coverLetterUrl) {
    return new Promise((resolve, reject) => {
        pdfToTextService.convertToText(coverLetterUrl).then(coverLetterText => {
            return comprehendService.getSentiment(coverLetterText.text);
        }).then(resumeAnalysis => {
            resolve(resumeAnalysis);
        }).catch(e => {
            reject(e);
        });
    })
}

function callFacebookService(token, userId) {
    return new Promise((resolve, reject) => {
        facebookService.getPosts(token, userId).then((postData => {
            // console.log(postData)
            var postsCollection = [];
            _.map(postData.posts.data, (post) => {
                if ('message' in post) {
                    var comp = comprehendService.getSentiment(post.message);
                    postsCollection.push(comp);
                }
                console.log(post);
            })
            return Promise.all(postsCollection);
        })).then(response => {
            resolve(response);
        }).catch(e => {
            reject(e);
        });
    })
}