const fs = require('fs');
const pdf = require('pdf-parse');
const Promise = require('bluebird');
const request = require('request');
const crawler = require('crawler-request');

module.exports.convertToText = function (url) {
    crawler(url).then(function (response) {
        // handle response
        console.log(response.text.length);
        console.log(response.text);
    });
}