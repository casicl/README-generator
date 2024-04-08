// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![License](https://img.shields.io/badge/License-${license}-yellow.svg)
  `
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `https://github.com/spdx/license-list-data/blob/main/text/${license}.txt
  `
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(project, description, contents, installation, usage, credits, test, questions, license) {

  return `# ${project}
  ## ${description}
  ## ${contents}
  ## ${installation}
  ## ${usage}
  ## ${credits}
  ## ${test}
  ## ${questions}
  ${renderLicenseBadge(license)}
  ${renderLicenseLink(license)}
`;
}

module.exports = generateMarkdown;
