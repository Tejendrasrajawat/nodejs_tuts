const http = require('http');
const fs = require('fs');
const requests = require('requests');

const homeFile = fs.readFileSync('index.html', 'utf-8')

const server = http.createServer((req,res)=> {
if(req.url == '/'){
    requests("https://api.openweathermap.org/data/2.5/forecast?q=delhi&appid=4beffc863037e89f0f181d893d1cf79b")
    .on('data', function(chunk){
        const objData = JSON.parse(chunk);
        const arrData = [objData];
        console.log(arrData)
    })
    .on('end', function(err){
        if(err) return console.log('err');
    })
}
})

server.listen(1200,'127.0.0.1');