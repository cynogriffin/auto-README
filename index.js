const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./questions');
const fileGenerator = require('./fileGenerator');

// run prompt upon running index.js with questions to collect responses for the README
inquirer.prompt(questions)
    .then(response => {
        // runs fileGenerator to create the template with the user's responses plugged in
        let content = fileGenerator(response);
        
        // creates the actual README file based on the template from fileGenerator
        fs.writeFile('./README.md', content, err => {
            if (err) throw err
            console.log('README created!');
        });
    });