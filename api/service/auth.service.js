const Promise = require('bluebird');
const request = require('request');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports.createUser = function(data) {
    console.log("SERVICE REG");
    return new Promise( (resolve, reject) => {
        var user = new User(data);
        user.save().then(res => {
            console.log(res);
            resolve(res)
        }).catch(e => {
         reject(e)
        });
    });
}

module.exports.loginUser = function(data) {
    return new Promise( (resolve, reject) => {
        var user = new user(data);
        console.log(user);
        user.save().then(res => {
            resolve(res)
        }).catch(e => {
         reject(e)
        });
    });
}
