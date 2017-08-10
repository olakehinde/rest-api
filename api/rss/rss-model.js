//import libraries for the book-service app
var mongoose 	= require('mongoose'),
	Schema 		= mongoose.Schema, //the object that creates the schema in the mongoose library
	rssFeeds;

	//connect to the mongoose server
	mongoose.createConnection("localhost/books");

	//create an instance of the schema and create the schema 
	rssFeeds = new Schema({
		title: {type: String, required: true},
		body: {type: String, required: true},
		createdAt: {type: Date, default:Date.now}
	});

	//export the db 
	module.exports = mongoose.model('rss', rssFeeds);