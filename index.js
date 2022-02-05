const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./utils/questions');
const fileGenerator = require('./utils/fileGenerator');

// run prompt upon running index.js with questions to collect responses for the README
inquirer.prompt(questions)
    .then(response => {
        const output = './output';

        // checks if an output directory already exists to store the generated README
        if (!fs.existsSync(output)) {
            fs.mkdir('./output', (err) => {
                if(err) throw err;
            });   
        };

        // runs fileGenerator to create the template with the user's responses plugged in
        let content = fileGenerator(response);
        
        // creates the actual README file based on the template from fileGenerator
        fs.writeFile('./output/README.md', content, err => {
            if (err) throw err
            console.log('README created!');
        });
    });