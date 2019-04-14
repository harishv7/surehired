const fs = require('fs');
const pdf = require('pdf-parse');
const Promise = require('bluebird');
const request = require('request');
const crawler = require('crawler-request');

var AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: "ap-southeast-1"
});

var s3 = new AWS.S3();

module.exports.convertToText = function (url) {
    crawler(url).then(function (response) {
        // handle response
        console.log(response.text.length);
        console.log(response.text);
    });
}