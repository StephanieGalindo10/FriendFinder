var friends = require('../data/friends');

///API ROUTES///
module.exports = function(app) {

	// Show all friends available
	app.get('/api/friends', function(req, res) {
		res.send(friends);
	});
	app.get('/', function(req, res){
		res.redirect('/friends');
	 });

	app.post('/api/friends', function(req, res) {
		// closest match object.
		var results = [];

		console.log(req.body, "this is the new friend");

		// string of JSON info
		var postResponse = JSON.stringify(req.body);

		

		    // Store the difference in values
		    var closestMatch = 0;
		    var matchScore = 999999999999999;

		    // Loop through the file to find the closest match
		    for (var i = 0; i < friends.length; i++) {
		    	var spaceBetween = 0;
		    	for (var j = 0; j < friends[i].scores.length; j++) {
		    		spaceBetween += Math.abs((parseInt(req.body.scores[j]) - parseInt(friends[i].scores[j])));
				}

				// If the space between the current listing is the closest to the user, update the closestMatch
				if(spaceBetween <= matchScore) {
					matchScore = spaceBetween;
					closestMatch = i;
		    	}
		    }

		    // console.log("Closest match: " + friendFile[closestMatch].name);

		    results.push(friends[closestMatch]);

		    // Add the new person to the existing array
		
			friends.push(req.body);
		    // Push back the entire updated result immediately
		   
			res.send(results[0]);

		});
	
}