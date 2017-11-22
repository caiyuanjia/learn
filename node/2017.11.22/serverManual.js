var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(require,response){
	var path = url.parse(require.url).pathname;
	fs.readFile(path.substr(1),function(err,data){
		response.write(data.toString());
		response.end();
	})
}).listen(8081);
console.log('Server running at http://127.0.0.1:8081/');