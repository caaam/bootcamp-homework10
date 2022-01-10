const inquirer = require('inquirer');

const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager');

console.log('Is this thing on?');

const emp1 = new Employee('James', 1, 'j@comp.co');
const emp2 = new Employee('Mark', 3, 'm@comp.co');

console.log(emp1.id);
console.log(emp2.id);