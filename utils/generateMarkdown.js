function renderLicenseBadge(license) {
  if (license === 'MIT') {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === 'APACHE 2.0') {
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'GPL 3.0') {
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === 'BSD 3') {
      return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  } else {
      return '';
  }
}

function renderLicenseSection(license) {
  if (license === 'None') {
      return '';
  } else {
      return `## License

This project is licensed under the ${license} license.`;
  }
}

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

${renderLicenseSection(data.license)}

## Questions
If you have any questions, you can contact me at:

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;
