console.log(`Let's make a README! \n`)

const inquirer = require('inquirer');



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
        choices: ["MIT", "ICS", "that other one"],
    },
]



inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
})
    .catch(error => {
        if (error.isTtyError) {
            "prompt couldn't be rendered in the current environment"
        } else {
            "something else went wrong"
        }
    });