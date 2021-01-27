console.log(`Let's make a README! \n`)

const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');



const questions = [
    {
        //pass questions here
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        name: 'description',
        message: 'Please provide a description of your project.',
    },
    {
        name: 'installation',
        message: 'Are there any instructions for installation?'
    },
    {
        name: 'usage',
        message: 'please provide the most basic usage example.'
    },
    {
        name: 'contributing',
        message: 'what information would you like to communicate to potential collaborators?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Does your project need a license?',
        choices: ["MIT", "ICS", "Apache", "none"],
    },
    {
        name: 'githubId',
        message: 'What is your github username?'
    },
    {
        name: 'email',
        message: 'what email can people contact you at?'
    },
]



inquirer.prompt(questions).then((answers) => {
    console.log(answers);
})
    .catch(error => {
        if (error.isTtyError) {
            "prompt couldn't be rendered in the current environment"
        } else {
            "something else went wrong"
        }
    });