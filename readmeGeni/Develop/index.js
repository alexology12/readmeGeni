// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const { generateMarkdown } = require('./utils/generateMarkdown');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions =  [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        //Project title
    },
    {
        type: "input",
        name: "inspiration",
        message: "In a few words describe what inspired you to build this project?",
        //Project inspiration
    },
    {
        type: "input",
        name: "description",
        message: "Please write a brief description about your project.",
        //Project description
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide information on how to install your project. ",
        //Installation intructions
    },
    {
        type: "input",
        name: "usage",
        message: "How would you like your project to be used?",
        //Usage Information
    },
    {
        type: "input",
        name: "user",
        message: "Who can use your project?",
        //User Information
    },
    {
        type: "list",
        name: "license",
        message: "Select a license from the following options:",
        choices: ['None','GNU','MIT','Mozilla','Boost','Apache','Unlicense'],
        //License information
    },
    {
        type: "input",
        name: "contributions",
        message: "Please provide guidelines as to how anyone can contribute to your project."
        //contributions
    },
    {
        type: "input",
        name: "tests",
        message: "What tests can be run on your project? Please provide instructions on how to run these tests"
        //Tests instructions
    },
    {
        type: "list",
        name: "contact",
        message: "What is your preferred method to be contacted for additional information about your project?",
        choices: ['gmail','GitHub'],
        //Contact information 
    },
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?"
        //Github username information
    },
    {
        type: "input",
        name: "email",
        message: "What is your gmail id?"
        //email information
    },
    {
        type: "input",
        name: "acknowledgements",
        message: "Your acknowledgements : I would like to thank ..."
        //Acknowledgements
    },
    {
        type: "input",
        name: "references",
        message: "Your references : "
        //References
    },
    {
        type: "input",
        name: "experience",
        message: "Please share your experience while working on this project. My experience while working on this project was : "
    }

];


// TODO: Create a function to write README file
function writeToFile (fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data),(err)=>{
    if (err) {
        console.log(err);
    } else {console.log("README file generated successfully!");
}
});
}

// TODO: Create a function to initialize app
function init () {
    inquirer.prompt(questions)
    .then((data) => {writeToFile('README.md', data)
});

}

// Function call to initialize app
init();
