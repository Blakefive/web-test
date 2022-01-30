const express = require('express');
const bodyParser = require('body-parser');

const app = express();


    app.use(bodyParser.urlencoded({extended : true}));

    app.listen(8080, function () {
        console.log('listening on 8080')
    });

    app.get('/', function(req, res){
        res.sendFile(__dirname + '/website/main.html');
    });

    app.post('/w', function(req, res){
        console.log("W");
    });

    app.post('/s', function(req, res){
        console.log("S");
    });

    app.post('/a', function(req, res){
        console.log("A");
    });

    app.post('/d', function(req, res){
        console.log("D");
    });
