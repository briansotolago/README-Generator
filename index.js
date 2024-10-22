const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: function(value) {
            const valid = /\S+@\S+\.\S+/;
            return valid.test(value) || 'Please enter a valid email address.';
        },
    },
    {
        type: 'input',
        message: 'What is your project\'s name?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please write a short description of your project',
        name: 'description',
    },
    {
        type: 'list',
        message: 'Choose a license for your project:',
        name: 'license',
        choices: ['MIT', 'None'],
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'installation',
        default: 'npm i',
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'test',
        default: 'npm test',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributing',
    },
];

function writeToFile(fileName, data) {
    const content = generateMarkdown(data);
    fs.writeFile(fileName, content, (err) =>
        err ? console.error(err) : console.log('Generating README...')
    );
}

function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile('./output/README.md', data);
        });
}

init();
