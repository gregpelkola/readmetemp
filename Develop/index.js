// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your Project.",
      },
      {
        type: "input",
        name: "description",
        message: "Enter a description of your Project",
      },
      {
        type: "input",
        name: "screenshot",
        message: "Enter the relative path for the image you want to use for a screenshot."
      },
      {
        type: "input",
        name: "link",
        message: "Enter the URL where a user can access your deployed application."
      },
      {
        type: "checkbox",
        name: "license",
        message: "Select the license you wish to use for this project.",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
      },
      {
        type: "input",
        name: "creator",
        message: "Enter your GitHub username.",
      },
      {
        type: "input",
        name: "email",
        message: "Enter a valid email address.",
      },
      {
        type: "input",
        name: "contributors",
        message: "Please list any contributors. (Use GitHub usernames)",
        default: "",
      },
      {
        type: "input",
        name: "test",
        message: "Enter any tests for your Project",
      },
    ];
       
    


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating README.md File...");
        writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
});
}

// Function call to initialize app
init();
