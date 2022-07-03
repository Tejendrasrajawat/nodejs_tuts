const fs = require('fs');

const person = {
    name: 'tejendra',
    age: 24,
    dob: 'august'
}

const JsonData = JSON.stringify(person);
const OBJData = JSON.parse(JsonData);
console.log(person);  //{ name: 'tejendra', age: 24, dob: 'august' }
console.log(JsonData)  // {"name":"tejendra","age":24,"dob":"august"}
console.log(OBJData) // { name: 'tejendra', age: 24, dob: 'august' }