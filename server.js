var express = require('express');
var bodyParser = require('body-parser');
var path = require('path')

// Create an instance of express server//
var app = express();

app.use(express.static(path.join(__dirname, '/app/public')));

///var port will be 3000(Local Host)///
var PORT = process.env.PORT || 3000;
console.log("In Server!!! ______")
///create a application//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


// Sets up the Express App contuine// Routes information//
// =============================================================//

require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

// Our Start Sever//
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});