const fs = require('fs');

const randomObject = {
    name: "tejendra singh rajawat.",
    class: 1,
    rules: "none"
}

// const JsonData = JSON.stringify(randomObject);
// const ObjData = JSON.parse(JsonData);

// console.log(JsonData);
// console.log(ObjData);


// 1. convert to JSON
const JsonData = JSON.stringify(randomObject);
// 2. add to another file
fs.writeFile('jsonFile.json',JsonData , (err) => {
    console.log('errors are - ' + err);
}) 
// 3. readfile
fs.readFile('jsonFile.json','utf-8', (err,data) => {
// 4. again convert back from JSON
    const orgData = JSON.parse(data);
 console.log(data);

// 5. console.log
 console.log(orgData);
})


