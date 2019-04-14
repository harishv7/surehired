const http_status = require('http-status'),
    util = require('util');
_ = require('lodash');
const fs = require('fs')
var AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: "ap-southeast-1"
});

var comprehend = new AWS.Comprehend();

module.exports = {
    getSentiment: function (req, res, next) {
        var params = {
            LanguageCode: 'en', /* required */
            Text: req.body.text /* required */
        };

        console.log(params)

        comprehend.detectSentiment(params, function (err, data) {
            if (err) res.send(err); // an error occurred
            else res.send(data);           // successful response
        });
    }
}