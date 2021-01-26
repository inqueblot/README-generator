const inquirer = require('inquirer');

inquirer
    .prompt({
        //pass questions here
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