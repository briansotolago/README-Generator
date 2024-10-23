// Function to return the appropriate license badge based on the user's selection
// It checks the selected license and returns the corresponding badge with a link
function renderLicenseBadge(license) {
  if (license === 'MIT') {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;  // MIT license badge
  } else if (license === 'APACHE 2.0') {
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;  // Apache 2.0 license badge
  } else if (license === 'GPL 3.0') {
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;  // GPL 3.0 license badge
  } else if (license === 'BSD 3') {
      return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;  // BSD 3-Clause license badge
  } else {
      return '';  // No license selected or 'None' chosen, so return an empty string
  }
}

// Function to generate the license section in the README
// It adds the license section only if a valid license is selected, otherwise returns an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
      return '';  // No license selected, return an empty string
  } else {
      return `## License

This project is licensed under the ${license} license.`;  // Insert the chosen license into the README
  }
}

// Function to generate the full markdown content of the README based on user input
// It uses the data provided from the user prompts
function generateMarkdown(data) {
  return `# ${data.title}
 
## Description
${data.description} 

## Table of Contents
- [Installation](#installation)
- [Tests](#tests)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## Installation
To install necessary dependencies, run the following command:

\`\`\`
${data.installation}  
\`\`\`

## Tests
To run tests, run the following command:

\`\`\`
${data.test} 
\`\`\`

## Usage
${data.usage} 

## Contributing
${data.contributing} 

${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}

## Questions
If you have any questions, you can contact me at:

- GitHub: [${data.github}](https://github.com/${data.github}) 
- Email: ${data.email} 
`;
}

// Export the 'generateMarkdown' function so it can be used in other files
module.exports = generateMarkdown;
