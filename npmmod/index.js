// we need to init npm in our project to use npm

// install chalk - npm i chalk
const chalk = require('chalk');
const { default: validator } = require('validator');
// install validator - npm i chalk

console.log(chalk.bgGreen('successful !'));
const res = validator.isEmail("ashu@ashu.com");
console.log(res);