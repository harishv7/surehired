
const Promise = require('bluebird');
const authService = require('../service/auth.service');

const tilesController = {
    create: function (req, res, next) {
       authService.createUser(req.body).then(response => {
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
       
    },

}

module.exports = tilesController;