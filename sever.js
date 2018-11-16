var express = require('express');
var app = express();
var bodyParser = require('body-parser');


var PORT = process.env.PORT || 3000;

///create a application//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


// Sets up the Express App contuine// Routes//
// =============================================================

require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

//sever//
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});