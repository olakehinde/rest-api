//import libraries for the book-service app
var mongoose 	= require('mongoose'),
	Schema 		= mongoose.Schema, //the object that creates the schema in the mongoose library
	Bookstore;

	//connect to the mongoose server
	mongoose.connect("localhost/books");

	//create an instance of the sschema and create the schema 
	Bookstore = new Schema({
		title: {type: String, required: true},
		author: {type: String, required: true},
		year: {type: Number, required:true},
		page: {type: Number, required:true},
		createdAt: {type: Date, default:Date.now}
	});

	//export the db 
	module.exports = mongoose.model('product', Bookstore);