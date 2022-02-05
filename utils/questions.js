// questions for inquirer to ask the user to collect the information for their README
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project.'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please provide installation instructions.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions on how to use the application.'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please provide contribution guidelines if you would like others to contribute to the project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide any test instructions.'
    },
    {
        type: 'list',
        name: 'license',
        choices: [
            'MIT',
            'Apache 2.0',
            'GPLv3',
            'BSD 3'
        ]
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
]

module.exports = questions;