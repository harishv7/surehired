const pdfToTextService = require('./pdfToText.service');
const comprehendService = require('./comprehend.service');
const rekognitionService = require('./rekognition.service');

module.exports.analysis = function (data) {
    return new Promise((resolve, reject) => {
        if (data.length > 0) {
            const resumeUrl = data[0].resume;
            const coverLetterUrl = data[0].coverLetter;
            const profilePicture = data[0].profilePicture;

            console.log(resumeUrl);
            console.log(profilePicture);

            // pdfToTextService.convertToText(resumeUrl).then(resumeText => {
            //     return comprehendService.getSentiment(resumeText.text);
            // }).then(resumeAnalysis => {
            //     resolve(resumeAnalysis);
            // }).catch(e => {
            //     reject(e);
            // });

            rekognitionService.getFacialAnalysis(data[0].userId, profilePicture.key).then(photoResult => {
                console.log(photoResult)
                resolve(photoResult)
            }).catch(e => {
                reject(e);
            });

        }
    });
}