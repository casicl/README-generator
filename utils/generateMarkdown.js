// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![License](https://img.shields.io/badge/License-${license}-yellow.svg)
  `
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if(license){  return `
  \n* [License] (#license)\n
  `}
  else return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `


  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(project, description, installation, usage, credits, test, github, email, license) {

  return `# ${project}
  ${renderLicenseBadge(license)}
  ## Description
  ${description}


  ## Table of contents 
  * [Installation](#installation) 
  * [Usage](#usage)
  * [Credits](#credits)
  * [Testing](#test)
  * [Questions](#questions)
  * [License](#license)
  
  
  ${renderLicenseLink(license)}
 
  <a name="installation"></a>
  ## Installation 
  ${installation}
  <a name="usage"></a>
  ## Usage 
  ${usage}
  <a name="credits"></a>
  ## Credits 
  ${credits}
  <a name="test"></a>
  ## Testing 
  ${test}
  <a name="questions"></a>
  ## Questions
  <https://www.github.com/${github}>
  ${email}
  ## License
  ${license}
 
`;
}

module.exports = generateMarkdown;
