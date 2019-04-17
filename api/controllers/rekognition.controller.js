const http_status = require('http-status'),
    util = require('util');
_ = require('lodash');
const fs = require('fs')
var AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: "us-east-1"
});

var rekognition = new AWS.Rekognition();

module.exports = {
    getFacialAnalysis: function (req, res, next) {
        var params = {
            Image: {
                S3Object: {
                    Bucket: "surehired/" + req.body.userId + "/" + "cover-photo",
                    Name: req.body.url
                }
            },
            Attributes: [
                'ALL',
            ]
        };

        rekognition.detectFaces(params, function (err, data) {
            if (err) console.log(err, err.stack);
            else {
                console.log(data);
            }
        })
    }
}