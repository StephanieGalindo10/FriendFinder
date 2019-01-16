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

express().use(express.static(path.join(__dirname, 'public')))
	.set('views', path.join(__dirname, 'views'))
	.set('view engine', 'ejs')
	.get('/', (req, res) => res.render('pages/index'))
	.listen(PORT, () => console.log(`Listening on ${ PORT }`));


// Our Start Sever//
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});