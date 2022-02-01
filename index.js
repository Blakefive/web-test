const express = require('express');
var mysql = require('mysql');
const app = express();
const port = process.env.PORT || 3000;

(async function(){
    let db = mysql.createPool({
        host: "us-cdbr-east-05.cleardb.net",
        user: "b80bb3614e25cd",
        password: "30a5c7bf",
        database: "heroku_96a107df1e5e545"
      });

let insertSql = 'INSERT INTO bmokey(name) VALUES("W")';
let selectSql = 'SELECT *FROM bmokey';

let connection = await db.getConnection(async conn => conn);
//await connection.beginTransaction();
let bmokey = await connection.query(insertSql);
await connection.commit();
await connection.release();

let get_connection = await db.getConnection(async conn => conn);
let [user] = await get_connection.query(selectSql);

app.get('/', async(req, res) => {res.send(user); get_connection.release();})
app.listen(port, () => {console.log("Example app listening on port ${port}");});
    })()
