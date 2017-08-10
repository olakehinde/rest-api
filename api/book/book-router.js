var express 	= require('express'),
	router 		= express.Router(),
	bookModel	= require('./book-model.js'); //import the db model for the app

	//create a route for param middleware
	router.param('id', function(req, res, next, id) {
		bookModel.findById(id, function(err, data) {
			if(err) {return next(new Error("Cannot find book"))} //return next(err)}
			if(!data) {return next(new Error("Book does not exist"))}
				req.book = data;

			next();
		})
	});

	router.route('/')
	.post(function(req, res, next) {
		var book = req.body;

		bookModel.create(book, function(err, data) {
			if(err) {return next(err);}
			res.status(200).send(data);
		})
	})
	.get(function(req, res, next) {
		bookModel.find(function(err, data) {
			if(err) {
				return next(new Error("No book in database"));
			}
			res.status(200).send(data);
		})
		
	});

	router.route('/:id')
	.get(function(req, res, next) {
		res.status(200).send(req.book);
	})
	.delete(function(req, res, next) {
		bookModel.findByIdAndRemove(req.book._id, function(err, data) {
			if(err) {return next(new Error("Cannot delete book"))}
				res.status(200).send(data);
		})
	})

	module.exports = router;