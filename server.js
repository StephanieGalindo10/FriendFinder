var express = require('express');
var bodyParser = require('body-parser');
var path = require('path')


var app = express();
var PORT = process.env.PORT || 3000;

console.log("In Server!!! ______")
///create a application//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static(path.join(__dirname, '/src/public')));
/// issues with server.js and heroku link ///
///check dependencies

require('./src/routing/api-routes')(app);
require('./src/routing/api-routes')(app); 



// Our Start Sever//
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});