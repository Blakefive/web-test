const mysql = require('mysql');
const client = require('./config/db.config.js');

var sql_insert = function(data){
    client.query('DELETE FROM bmokey', function(err, result){
        if (err){
            throw err;
        }
        console.log("Database clear");
    });
    client.query('INSERT INTO bmokey(name) VALUES(?)',[data], function(err, result){
        if (err){
            throw err;
        }
        console.log("1 record inserted");
    });
}
module.exports = sql_insert;
