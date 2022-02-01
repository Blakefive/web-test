const express = require('express');
const {config} = require('./config/db.config')
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send("config: ${config} port: ${port}"))
app.listen(port, () => {console.log("Example app listening on port ${port}");});

