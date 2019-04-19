const Promise = require('bluebird');
const jobService = require('../service/jobs.service');
const queueService = require('../service/queue.service');

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
        const jobId = req.params.jobId
        jobService.patch(jobId, req.body).then(response => {
            res.send(response);
        }).catch(e => {
            res.send(e);
        })
    },

    delete: function (req, res, next) {

    },
    testQueue: function (req, res, next) {
        queueService.sendMsg(JSON.stringify({
            type: "TEST",
            jobId: '1'
        })).then(response => {
            res.send(response);
        }).catch(e => {
            res.send(e);
        })
    },
}

module.exports = jobsController;