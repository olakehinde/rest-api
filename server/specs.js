let app			= require('./server.js'),
	request 	= require('supertest'), //import supertest library
	chai		= require('chai'), //import chai library
	expect 		= chai.expect,
	assert		= chai.assert,
	should		= chai.should(),
	http 		= require('chai-http'); //import chai-http library

	chai.use(http);

	describe("book routes", function() {
		var book = {'title': 'A good day to die',
					'author': 'Ola Kehinde',
					'year': 2017,
					'page': 500
					};

		// test to return/get all products from the DB
		it.skip("should return all books in DB", function(done) {
			request(app)
				.get('/api/book')
				.expect('Content-Type', 'text/json')
				.expect(200)
				.end(function(err, res) {
					res.body.should.be.an('array');
					//should(res.body).to.be.an('object');
					done();
				})
		});


		// test to add/insert/post a product to the DB
		it.skip("add/post book to the db", function(done) {
		request(app)
			.post('/api/book')
			.send(book)
			.expect('Content-Type', 'object')
			.expect(200)
			.end(function(err, res) {
				res.body.should.be.an('object');
				done();
			})
		});

		// test to get a product by ID
		it.skip('should return a single product by id', function(done) {
			request(app)
				.post('/api/book')
				.send(book)
				.end(function(err, res) {
					request(app)
					.get('/api/book/'+res.body._id)
					.end(function(err, res2) {

						expect(res.body._id).to.be.equal(res2.body._id)
						request(app)
						.delete('/api/book/'+res.body._id)
						.end(function(err, res3) {
							done();
						})
					})
				})
		})

		// test for deleting a product by ID
		it('should delete a product by ID', function(done) {
			request(app)
				.post('/api/book')
				.send(book)
				.end(function(err, res) {
					request(app)
					.delete('/api/book/'+res.body._id)
					.end(function(err, res2) {
						done();
					})
				})
		})
	});
