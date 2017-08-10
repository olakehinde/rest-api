var api 		= require('express').Router(),
	bookRouter 	= require('./book/book-router.js');
	rssRouter 	= require('./rss/rss-router.js');

	//mount all api files
	api.use('/book', bookRouter);
	api.use('/rss', rssRouter);

	//export module
	module.exports = api;