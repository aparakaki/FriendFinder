var express = require("express");
var path = require("path");

var app = express();

module.exports = (function(app) {
    app.get("/survey", function(req, res) {
        res.sendfile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("*", function(req, res) {
        res.sendfile(path.join(__dirname, "../public/home.html"));
    });
})