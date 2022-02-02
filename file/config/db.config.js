var mysql = require('mysql');

const client = mysql.createConnection({
  host: 'us-cdbr-east-05.cleardb.net',
  user: 'b80bb3614e25cd',
  password: '30a5c7bf',
  database: 'heroku_96a107df1e5e545'
})

module.exports = client;