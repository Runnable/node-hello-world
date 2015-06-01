var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hello World18');
});

app.listen(80);
