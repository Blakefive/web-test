const express = require('express');
const db = require('./config/db.config')
const app = express();
const port = process.env.PORT || 3000;

let insertSql = 'INSERT INTO bmokey(name) VALUES(?)';
let selectSql = 'SELECT *FROM bmokey';

let connection = await db.getConnection(async conn => conn);
connection.beginTransaction();
let bmokey = await connection.query(insertSql, ["W"]);
connection.commit();
connection.release();

let get_connection = await db.getConnection(async conn => conn);
let [user] = await get_connection.query(selectSql);

app.get('/', (req, res) => {res.send(user); get_connection.release();})
app.listen(port, () => {console.log("Example app listening on port ${port}");});

