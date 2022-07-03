// they are just like js libraries
// fs use to work in file system
const fs = require("fs");
fs.writeFileSync('read.txt','welcome to my channel');
fs.writeFileSync('read.txt','override the text  ');

fs.appendFileSync('read.txt', 'it add the lines without override');

// shows buffer data of file
//  node.js include additional data type buffer not included in js
//  it is used to store binary data
// while reading a file or reciving on network
const buffer_data = fs.readFileSync('read.txt');
console.log(buffer_data);

// show original data , not buffer data - convert to string
original_data = buffer_data.toString();
console.log(original_data);

// to rename the file
fs.renameSync('read.txt','readWrite.txt');