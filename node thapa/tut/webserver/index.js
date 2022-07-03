const http = require("http");

// create server
const server = http.createServer((req, res) => {
  // console.log(req.url)
  if(req.url == '/'){
    res.end('hello from side')
  }
  else if(req.url == '/contact'){
    res.end('hello from  contact side')
  }
  else{
    res.end('404')
  }
});

// listen server
server.listen("1300", "127.0.0.1", ()=> {
    console.log('listening.......')
});
