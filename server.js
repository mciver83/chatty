var http = require('http');

var messages = [{message: "hey Kyle"}, {message: "this is fun isn't it"}];

var onRequest = function(req, res){
	if(req.method === 'GET'){
		res.writeHead(200, {
	        'Connection': 'close',
	        'Content-Type': 'application/json',
	        'Access-Control-Allow-Origin': '*',
	        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
	  		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      	});
		res.end(JSON.stringify(messages));
	}

	if(req.method === 'POST'){
		var postData = '';
		req.on('data', function(chunk){
			postData += chunk.toString();
		});
		req.on('end', function(){
			console.log("Got POST data:");
			console.log(JSON.parse(postData));
			messages.push(JSON.parse(postData));
		});
		

		res.writeHead(200, {
			'connection': 'close',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
	        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
	  		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
	     });
		res.end(JSON.stringify(messages));
	}

	if (req.method === 'OPTIONS') {
	    res.writeHead(200, {
	        'Connection': 'close',
	        'Content-Type': 'application/json',
	        'Access-Control-Allow-Origin': '*',
	        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
	        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
	      });
	    res.end("{}");
	  }
	
}

var server = http.createServer(onRequest).listen(8888);
