const fs  = require('fs');

// write
fs.writeFileSync('read.txt', 'create a new file with this text!, also overwrite existing file \n');
fs.appendFileSync('read.txt', 'create file , if already exist then append data not overwrite !');

// rename file
fs.renameSync('read.txt', 'readWrite.txt')

// read
const BufferData = fs.readFileSync('readWrite.txt');
console.log(BufferData)
originalData = BufferData.toString();
console.log(originalData)