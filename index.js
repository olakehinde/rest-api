//mount the app server file
var app 	= require('./server/server.js'),
	express = require('express');

	//serve files from here
	app.use(express.static(__dirname + "/public"));
	
	//bind port for the server to listen to request
	app.listen("3001", function() {
		console.log("server started");
	});