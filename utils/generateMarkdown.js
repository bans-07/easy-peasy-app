// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (!license) return '';
  return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// If there is no license, return an empty string

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (!license) return '';
  return `- [License](#license)`;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return '';
  return `## License
This project is licensed under the ${license} license.`;
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
  ${renderLicenseLink(data.license)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions, feel free to reach out:
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}](mailto:${data.email})
  `;
}


export default generateMarkdown;
