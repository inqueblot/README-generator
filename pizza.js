const inquirer = require('inquirer');
const fs = require('fs');
const questions = [
    {
        type: "input",
        message: "What is your name?",
        name: "name"
    },
    {
        type: "input",
        message: "Where do you live?",
        name: "location"
    },
    {
        type: "input",
        message: "Tell us a little bit about yourself?",
        name: "bio"
    },
    {
        type: "input",
        message: "what is your linkedin url?",
        name: "linkedin"
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "github"
    }];
inquirer.prompt(questions).then((Response) => {
    console.log(Response)
    // htmlGenerator(Response)
    fs.writeFileSync("test.html", htmlGenerator(Response))
})
function htmlGenerator({ name, bio, location, github, linkedin }) {
    const html =
        `<!DOCTYPE html> 
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    </head>
    <body>
    <div class="jumbotron">
    <h1 class="display-4">Hi! my name is ${name}</h1>
    <p class="lead">I am from ${location}</p>
    <hr class="my-4">
    <h2>Bio</h2>
    <p>${bio}</p>
    <h3>Contact Me</h3>
    <ul>
    <li>
    <a href="https://github.com/${github}">https://github.com/${github}</a>
    </li> 
    <li>   
    <a href="${linkedin}">${linkedin}</a>
    </li> 
    </ul>
    </div>
    
    <script type="text/javascript" src="index.js"></script>    
    </body>
    </html>`
    return html

}