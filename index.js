var express = require('express');
var {config} = require('./config/db.config')
var app = express();
var port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send(config))
app.listen(port, () => {console.log("Example app listening on port ${port}");});

