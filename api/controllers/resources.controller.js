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

var s3 = new AWS.S3();

module.exports = {
    uploadResource: function (req, res, next) {
        console.log(req.body);
        if (req.files.file.path) {
            var tmp_path = req.files.file.path;
            var content_type = req.files.file.type
            image = fs.createReadStream(tmp_path);
            image_name = req.files.file.name;
            var directory = req.body.category || "default"

            const params = {
                Bucket: "surehired/" + process.env.NODE_ENV + "/" + directory,
                Key: `${image_name}`,
                ACL: 'public-read',
                Body: image,
                ContentType: content_type
            };

            s3.upload(params, function (err, data) {
                if (err) return next(new api_error(err));

                if ('Location' in data) {
                    res.send(data);
                } else {
                    next(new api_error("Missing Resource URL"));
                }
            })
        } else {
            next(new api_error("File Missing"));
        }
    }
}