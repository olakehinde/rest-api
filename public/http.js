var frm = document.getElementById("book");
let xhr = new XMLHttpRequest();
var feed = document.getElementById('feed');

feed.addEventListener('submit', function(e) {
	e.preventDefault();

	xhr.open('GET', "http://bellanaija.com/feed");

	xhr.onreadystatechange = function() {
	ResponseHandler(xhr);
	}
	xhr.send(null); //sends a null value

function ResponseHandler(ajax) {
	if(ajax.readyState == 4) {
		if(ajax.status == 200 || ajax.status == 304) {
			var res = JSON.parse(ajax.response);
			console.log(res);
		}
	}
}
	
}, false);

// click event listener for the form
frm.addEventListener('submit', function(e) {
	// var post = [];

	var post = {};

	e.preventDefault();
	xhr.open('POST', 'http://localhost:3001/api/book');

	// set a request header for the form. it is compulsory
	// xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.setRequestHeader('Content-Type', 'application/json');

	//listen to the server
	xhr.onreadystatechange = function() {
		//call the function to handleResponse here...
		handleResponse(xhr);
	}


	// build the post data
	for(var i = 0; i < frm.elements.length; ++i) {
		// post.push(frm.elements[i].name + "=" + encodeURIComponent(frm.elements[i].value))
		post[frm.elements[i].name] = frm.elements[i].value
	}

	// post = post.join("&");
	post = JSON.stringify(post);
	// console.log(post);

	// send post data to the server
	xhr.send(post);

	
}, false);

// function to handle response
function handleResponse(ajax) {
	if(ajax.readyState == 4) {
		if(ajax.status == 200 || ajax.status == 304) {
			var res = JSON.parse(ajax.response);
			var sucess = document.getElementById('msg');
			var sucess_msg = "Book Inserted sucessfully";
			var node = document.createTextNode(sucess_msg);
			sucess.appendChild(node);
			console.log(res);
		}
	}
};








// let xhr = new XMLHttpRequest();

// //test the httprequest object
// //console.log(xhr);

// xhr.open('GET', "http://localhost:3001/api/book");

// xhr.onreadystatechange = function() {
// 	handleResponse(xhr);
// }
// xhr.send(null); //sends a null value

// function handleResponse(ajax) {
// 	if(ajax.readyState == 4) {
// 		if(ajax.status == 200 || ajax.status == 304) {
// 			var res = JSON.parse(ajax.response);
// 			console.log(res);
// 		}
// 	}
// }