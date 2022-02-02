const express = require('express');
var edit_data = require('./file/edit_data.js');

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);
const port = process.env.PORT || 3000;

app.get('/', async(req, res) => {
    res.render(__dirname + '/index.html');
});
app.post('/', (req, res) => {
    console.log(req.body.key);
    edit_data(req.body.key);
    //res.render(__dirname + '/index.html', {'data' : req.body})
    res.redirect('/');
});
app.listen(port, () => {
    console.log("Server Start");
});
