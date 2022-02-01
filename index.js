const express = require('express');
const config = require('./config/db.config.js')
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send(config.check))
app.listen(port, () => {console.log("Example app listening on port ${port}");});

