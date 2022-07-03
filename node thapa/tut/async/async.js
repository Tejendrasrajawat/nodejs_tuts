const fs  = require('fs');

// write
fs.writeFile('read.txt', 'create a new file with this text!, also overwrite existing file \n',(err)=>{
    console.log(err)
});
fs.appendFile('read.txt', 'create file , if already exist then append data not overwrite !', (err)=> {
    console.log(err)
});

// rename file
fs.rename('read.txt', 'readWrite.txt', (err)=> {
    console.log(err)
})

// read
fs.readFile('readWrite.txt', 'utf-8', (err,data)=> {
    console.log(data);
    console.log(err);
});