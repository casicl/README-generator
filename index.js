// TODO: Include packages needed for this application
const fs=require("fs");
const inquirer=require("inquirer");
const generateMarkdown=require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
        type:"input",
        message:"Repository name?",
        name: "repository"
        },

        {
        type:"input",
        message:"Project title?",
        name:"project",
        },

        {
        type:"input",
        message: "Project Description?",
        name:"description",
        },

        {
        type: "input",
        message: "Installation instructions?",
        name: "installation",
        },

        {
        type: "input",
        message: "Usage info?",
        name: "usage",
        },

        {
        type: "input",
        message: "Contributors?",
        name: "credits",
        },

        {
        type: "input",
        message: "How to test?",
        name: "test",
        },

        {
        type: "input",
        message: "Github",
        name: "github",
        },

        {
        type: "input",
        message: "email",
        name: "email"
        },

        {
        type:"list",
        message: "select license",
        name: "license",
        choices: ["Apache-2.0", "GPL-3.0-only", "MIT", "BSD-2-Clause", "BSD-3-Clause", "BSL-1.0", "EPL-2.0", "AGPL-3.0-only", "GPL-2.0", "LGPL-2.1", "MPL-2.0", "Unlicense"],
        },

       

    ]).then(({repository, project, description, installation, usage, credits, test, github, email, license})=>{
        const template=generateMarkdown(project, description, installation, usage, credits, test, github, email, license);
        console.log(template);
        fs.writeFile("utils/README.md", template, (err) =>
        err ? console.log(err) : console.log('Success!')
      );//fs.writeFile(repository, "")
    })
}

// Function call to initialize app
init();
//GIVEN a command-line application that accepts user input
//WHEN I am prompted for information about my application repository
//THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
//WHEN I enter my project title
//THEN this is displayed as the title of the README
//WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
//THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
//WHEN I choose a license for my application from a list of options
//THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
//WHEN I enter my GitHub username
//THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
//WHEN I enter my email address
//THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
//WHEN I click on the links in the Table of Contents
//THEN I am taken to the corresponding section of the README