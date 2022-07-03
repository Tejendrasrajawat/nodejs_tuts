// in async you need to call callback function 
const fs = require('fs');

// so we use fat arrow function here to use async else it will throw a error
fs.mkdir('tej', (err)=>{
console.log('folder created. '+err);
});
fs.writeFile('tej/one.txt','hello there \n', (err) =>{
console.log('file created. '+err);
})
fs.appendFile('tej/one.txt','second line.' ,(err)=>{
console.log('data is appended. '+err);
})




// sync is first line first serve , below code will wait
//     but in async is first run code which can run fast. no priority