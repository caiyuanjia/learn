var http = require("http");
var url = require("url");

function start(route,handle){
	function httpServer(request,response){
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		route(handle,pathname);
    	response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("test success!");
		response.end();
	}
	http.createServer(httpServer).listen(8000);
	console.log("run success!");
}
exports.start = start;