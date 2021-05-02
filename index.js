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
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How can somebody else install your application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use the application?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How do you want other users to contribute to the README.MD application?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How should a user test your applciation?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'githubusername',
        message: 'What is your github username?',
    },
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
