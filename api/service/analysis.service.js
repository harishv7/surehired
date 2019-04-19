const pdfToTextService = require('./pdfToText.service');
const

    module.exports.analysis = function (data) {
        return new Promise((resolve, reject) => {
            if (data.length > 0) {
                const resumeUrl = data[0].resume;
                const coverLetterUrl = data[0].coverLetter;
                const profilePictureUrl = data[0].profilePicture;

                console.log(resumeUrl);

                pdfToTextService.convertToText(resumeUrl).then(resumeText => {
                    resolve(resumeText);
                }).catch(e => {
                    reject(e);
                });
            }
        });
    }