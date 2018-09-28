var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var characters = require("../data/friends.js")

module.exports = function(app) {
    app.get("/api/characters", function(req, res) {
        res.json(characters);
    })

    app.post("/api/characters", function(req, res) {
        var userInput = req.body;
        var diffArray = [];

        for (let i = 0; i < characters.length; i++) {
            let diff = 0;
            for(let j = 0; j < characters[i].scores.length; j++) {
                diff += Math.abs(characters[i].scores[j] - parseInt(userInput.scores[j]));
            }
            diffArray.push(diff);
        }
        let minResult = Math.min.apply(Math, diffArray);
        let index = diffArray.indexOf(minResult);
        res.json(characters[index]);
        // console.log(characters[index]);
    })
    
}