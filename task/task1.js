// 1. create a folder
// 2. create a file under folder and add data
// 3. append or add more data
// 4. read data without buffer in  string 
// 5. rename the file
// 6 delete both foldder and file

// Crud
// create , update , read , delete

const fs = require('fs');

fs.mkdirSync('tejendra');
fs.writeFileSync('tejendra/one.txt','this is the data under the file \n');
fs.appendFileSync('tejendra/one.txt','this is second line which is appended');
fs.readFileSync('tejendra/one.txt','utf-8');
fs.renameSync('tejendra/one.txt','tejendra/two.txt');
fs.unlinkSync('tejendra/two.txt');
fs.rmdirSync('tejendra');