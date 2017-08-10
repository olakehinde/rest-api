//import libraries
var express 	= require('express'),
	app			= express(),
	bodyParser 	= require('body-parser'),
	morgan 		= require('morgan'), //imports the morgan library for server message logging
	cors 		= require('cors'), 
	api		 	= require('../api/api.js'); //import the router library

	//import the middleware (app level middlewares)
	app.use(bodyParser.urlencoded({extended: false})); //middleware for form data
	app.use(bodyParser.json());
	app.use(morgan('dev'));
	app.use(cors());

	//mount the routes...
	app.use('/api', api);

	//error middleware
	app.use(function(err, req, res, next) {
		console.log(err);
		res.status(500).send(err.message);
	})

	module.exports = app;