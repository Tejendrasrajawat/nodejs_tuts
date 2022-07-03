const http = require('http');

// create server
// req = request ; res = response
const server = http.createServer((req,res) => {
    // request url condition to show
if(req.url == "/"){
    res.end("Hello from the other side.");
}
else if(req.url == "/about") {
    res.end("about page");
}

else {
    res.writeHead(404,{'content-type': 'text/html'})
    res.end("<h1>404 error page</h1>")
}

});

// listen to post num and ip
server.listen(8000,"127.0.0.1") ,() => {
console.log("working on port 8000");
}