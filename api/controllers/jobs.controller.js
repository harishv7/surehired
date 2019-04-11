const Promise = require('bluebird');
const jobService = require('../service/jobs.service');

const jobsController = {
    create: function (req, res, next) {
        jobService.createJob(req.body).then(response => {
            res.send(response);
        }).catch(e => {
            res.send(e);
        })
    },

    get: function (req, res, next) {
        res.send("get detail")
    },

    patch: function (req, res, next) {

    },

    delete: function (req, res, next) {

    }
}

module.exports = jobsController;