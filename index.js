// Import the 'fs' (File System) module to handle file writing
const fs = require('fs');

// Import the custom 'generateMarkdown' module to generate the README content based on user input
const generateMarkdown = require('./utils/generateMarkdown');

// Import the 'inquirer' package to prompt the user for input via the command-line
const inquirer = require('inquirer');

// Array of questions to prompt the user for input, used to generate the README file
const questions = [
    {
        type: 'input',   // Prompts user for their GitHub username
        message: 'What is your GitHub username?',
        name: 'github',  // This input will be stored in the 'github' key
    },
    {
        type: 'input',   // Prompts user for their email address
        message: 'What is your email address?',
        name: 'email',   // This input will be stored in the 'email' key
        validate: function(value) {         // Validates if the input is a valid email format
            const valid = /\S+@\S+\.\S+/;   // Regex pattern to check valid email
            return valid.test(value) || 'Please enter a valid email address.';  // Returns error if email is invalid
        },
    },
    {
        type: 'input',   // Prompts user for their project's name
        message: 'What is your project\'s name?',
        name: 'title',   // This input will be stored in the 'title' key
    },
    {
        type: 'input',   // Prompts user for a short description of their project
        message: 'Please write a short description of your project',
        name: 'description',  // This input will be stored in the 'description' key
    },
    {
        type: 'list',    // Prompts user to select a license from a list
        message: 'Choose a license for your project:',
        name: 'license', // This input will be stored in the 'license' key
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],  // List of license options for the user to choose from
    },
    {
        type: 'input',   // Prompts user for the command to install dependencies
        message: 'What command should be run to install dependencies?',
        name: 'installation', // This input will be stored in the 'installation' key
        default: 'npm i',     // Default value if the user doesn't provide any input
    },
    {
        type: 'input',   // Prompts user for the command to run tests
        message: 'What command should be run to run tests?',
        name: 'test',    // This input will be stored in the 'test' key
        default: 'npm test',  // Default value if the user doesn't provide any input
    },
    {
        type: 'input',   // Prompts user for usage instructions
        message: 'What does the user need to know about using the repo?',
        name: 'usage',   // This input will be stored in the 'usage' key
    },
    {
        type: 'input',   // Prompts user for contributing guidelines
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributing', // This input will be stored in the 'contributing' key
    },
];

// Function to write the generated README file
// 'fileName' is the name of the file, 'data' contains the user's input
function writeToFile(fileName, data) {
    // Generate the content for the README using the user input and the 'generateMarkdown' function
    const content = generateMarkdown(data);
    
    // Write the generated content to a file
    fs.writeFile(fileName, content, (err) =>
        err ? console.error(err) : console.log('Generating README...') // Log success or error message
    );
}

// Function to initialize the application
function init() {
    // Prompt the user with the questions defined in the 'questions' array
    inquirer.prompt(questions)
        .then((data) => {
            // After the user responds, write the data to 'README.md' file in the 'output' folder
            writeToFile('./output/README.md', data);
        });
}

// Function call to initialize the application
init();
