var express = require('express');
var app = express();
var bodyParser = require('body-parser');


var PORT = process.env.PORT || 3000;

///create a application//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var path = require('path');
var fs = require('fs');

// Sets up the Express App contuine//
// =============================================================
var path = require('path');
var fs = require('fs');


