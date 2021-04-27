// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown");

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        tyle: 'input',
        name: "description",
        message: "Please describe your project"
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is your project licensed under?',
        choices: ['None', 'MIT', 'Apache-2.0']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  
  writeFileAsync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => 
        writeToFile('readme.md', generateMarkdown(response) )
        )
}

// Function call to initialize app
init();
