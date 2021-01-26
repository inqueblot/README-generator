console.log(`Let's make a README! \n`)

const inquirer = require('inquirer');



const questions = [
    {
        //pass questions here
        name: 'Title',
        message: 'What is the name of your project?'
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