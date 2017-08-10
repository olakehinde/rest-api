var express = require('express'),
	router 	= express.Router(),
	rssModel = require('./rss-model.js');

	//create a route for param middleware
	router.param('id', function(req, res, next, id) {
		rssModel.findById(id, function(err, data) {
			if(err) {return next(new Error("Cannot find feed"))} //return next(err)}
			if(!data) {return next(new Error("RSS feed does not exist"))}
				req.rss = data;

			next();
		})
	});

	router.route('/')
	.post(function(req, res, next) {
		var rss = req.body;

		rssModel.create(rss, function(err, data) {
			if(err) { return next(err);}
			res.status(200).send(data);
		});
	})
	.get(function(req, res, next) {
		rssModel.find(function(err, data) {
			if(err) {return next(new Error('Cannot find feeds'));}
			res.status(200).send(data);
		})
	})

	module.exports = router;