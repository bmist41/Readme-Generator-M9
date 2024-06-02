// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a description of your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide installation instructions:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide usage information:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please provide contribution guidelines:',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Please provide test instructions:',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Please choose a license for your project:',
        name: 'license',
        choices: ['MIT', 'GNU', 'Apache', 'ISC'],
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            writeToFile('README.md', generateMarkdown(answers));
        });
}

// Function call to initialize app
init();
