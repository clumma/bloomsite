var express = require('express');

var app = express();
app.use(express.static('site'));
app.listen(80);
