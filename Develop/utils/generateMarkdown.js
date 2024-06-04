// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if (license === 'GNU') {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    } else if (license === 'Apache') {
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else if (license === 'ISC') {
        return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
    } else {
        return ''
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'MIT') {
        return `[MIT](https://opensource.org/licenses/MIT)`
    } else if (license === 'GNU') {
        return `[GNU](https://www.gnu.org/licenses/gpl-3.0)`
    } else if (license === 'Apache') {
        return `[Apache](https://opensource.org/licenses/Apache-2.0)`
    } else if (license === 'ISC') {
        return `[ISC](https://opensource.org/licenses/ISC)`
    } else {
        return ''
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'MIT') {
        return `This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license.`
    } else if (license === 'GNU') {
        return `This project is licensed under the [GNU](https://www.gnu.org/licenses/gpl-3.0) license.`
    } else if (license === 'Apache') {
        return `This project is licensed under the [Apache](https://opensource.org/licenses/Apache-2.0) license.`
    } else if (license === 'ISC') {
        return `This project is licensed under the [ISC](https://opensource.org/licenses/ISC) license.`
    } else {
        return ''
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title} 
  ${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## License
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
## Contributing
${data.contribution}
## Tests
${data.test}
## Questions
    - GitHub: [${data.github}] 
    - Email: ${data.email}
`;
}

module.exports = generateMarkdown;
