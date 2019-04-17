// Require objects.
const Promise = require('bluebird');
var express = require('express');
var app = express();
var aws = require('aws-sdk');

var Json = {
    "accessKeyId": process.env.AWS_ACCESS_KEY,
    "secretAccessKey": process.env.AWS_SECRET_KEY,
    "region": process.env.AWS_REGION,
    "queueUrl": process.env.AWS_QUEUEURL
}


aws.config.update(Json)

// Instantiate SQS.
var sqs = new aws.SQS();

// Creating a queue.
var create = function (name) {
    var params = {
        QueueName: name
    };

    return new Promise(function (resolve, reject) {
        sqs.createQueue(params, function (err, data) {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
};

// Listing our queues.
var list = function (name) {

    return new Promise(function (resolve, reject) {
        sqs.listQueues(function (err, data) {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
};

// Sending a message.
// NOTE: Here we need to populate the queue url you want to send to.
// That variable is indicated at the top of app.js.
var sendMsg = function (body) {
    var params = {
        MessageBody: body,
        QueueUrl: process.env.AWS_QUEUEURL,
        DelaySeconds: 0
    };
    return new Promise(function (resolve, reject) {
        sqs.sendMessage(params, function (err, data) {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
};


module.exports = { create, list, sendMsg };