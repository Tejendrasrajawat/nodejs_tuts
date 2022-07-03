const fs = require('fs');

fs.mkdir('async', (err)=> {console.log(`there are ${err} error`)});
fs.writeFile('async/text.txt', 'first line \n', (err)=> {console.log(`there are ${err} error`)})
fs.appendFile('async/text.txt', 'second line', (err)=> {console.log(`there are ${err} error`)})
fs.renameSync('async/text.txt', 'async/async.txt', (err)=> {console.log(`there are ${err} error`)})
fs.readFile('async/async.txt', 'utf-8', (err, data)=> {console.log(`there are ${err} and data is \n  ${data} \n error`)})
fs.rmdir('./async', (err)=> {console.log(`there are ${err} error`)})