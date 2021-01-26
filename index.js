console.log(`Let's make a README! \n`)

const inquirer = require('inquirer');

inquirer
    .prompt({
        //pass questions here
        name: 'Title',
        message: 'What is the name of your project?'
    })
    .then(answer => {
        //user feedback for...whatever!!
    })
    .catch(error => {
        if (error.isTtyError) {
            "prompt couldn't be rendered in the current environment"
        } else {
            "something else went wrong"
        }
    });