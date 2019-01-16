var express = require('express');
var bodyParser = require('body-parser');
var path = require('path')


var app = express();

app.use(express.static(path.join(__dirname, '/src/public')));
//// local hostto connect to web ///

var PORT = process.env.PORT || 3000;
console.log("In Server!!! ______")
///create a application//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


/// issues with server.js and heroku link ///
///check dependencies

require('./src/routing/api-routes')(app);
require('./src/routing/api-routes')(app); 

let environment = process.env.NODE_ENV || 'development';

if (environment === "production") {
  app.use(express.static(`${__dirname}/../dist`));

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/../dist/index.html`));
  });

// Our Start Sever//
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});