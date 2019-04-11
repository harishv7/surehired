const Promise = require('bluebird');
const request = require('request');
const mongoose = require('mongoose');
const UserJob = mongoose.model('UserJob');

module.exports.createJob = function (data) {
    return new Promise((resolve, reject) => {
        var userJob = new UserJob(data);
        userJob.save().then(res => {
            console.log(res);
            resolve(res)
        }).catch(e => {
            reject(e)
        });
    });
}