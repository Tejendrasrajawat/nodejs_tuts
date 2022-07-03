// create a folder
// create a file and put data in it
// add more data in end of file
// read data without getting buffer
// rename file name
// now delete

// CRUD operation


const fs = require('fs');

// create dir
fs.mkdirSync('tejendra')
// create file
fs.writeFileSync('tejendra/data.txt', 'this is first data \n');
// create/append file
fs.appendFileSync('tejendra/data.txt', 'adding more data in file');
// rename file
fs.renameSync('tejendra/data.txt', 'tejendra/modified.txt')
// read file
const originalData = fs.readFileSync('tejendra/modified.txt', 'utf-8')
console.log(originalData)
// delete file
fs.unlinkSync('tejendra/modified.js')
// delete folder
fs.rmdirSync('tejendra')