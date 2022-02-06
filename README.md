[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Auto README

## Description

This project demonstrates skills in Javascript, node.js, and npm by generating a complete professional README file from only the command line using user input. When the user runs the application, they are prompted to enter the information about their project and once all prompts have been answered, the program will generate a completed README.md file in an untracked output directory. 

In this project, I learned how to utilize node.js to build an application that runs from the command line, utilizes multiple JavaScript files, and uses add-ins like npm's inpuirer package. I also learned how to create a more complete README file with things such as badges, a table of contents with navigation tools, installation instuctions, and contact information. Some challenges I faced with this project included working through some issues with README navigation to return users to the table of contents, code structure and organization, and figuring out how to incorporate GitHub badges in the README. Most of the other code actually went quite smoothly, surprisingly.

Please feel free to use and test the application and let me know of any improvements or suggestions via my contact information in the Questions section.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Credits](#credits)
* [Questions](#questions)

## Installation

In order to run and use this application, you must first install node.js. This application also utilizes the npm inquirer package, which is included in the file here and can be installed at once using the `npm install` command. Once that is complete, you should be ready to run the program to create your own quality, hassle-free READMEs. 

## Usage
##### [Back to Table of Contents](#table-of-contents)

To use the application, you wil need to run `node index` from the command line of the repo, as seen below: 

![node index in the command line](https://github.com/cynogriffin/auto-README/blob/main/assets/images/initialize.PNG)

Then you will be asked a series of questions about your project and your contact information. All of this information is entered into the command line prompts, as seen here:

![command line prompts](https://github.com/cynogriffin/auto-README/blob/main/assets/images/prompts.PNG)

Once all the questions have been completed, a confirmation message will be logged and a 'output' directory will be added with the newly-created README.md file inside. All of the user's information given to the prompts will be used to autofill the README, this no extra hassle with formatting or links needed. An exaple of a complete generated README can be seen below:

![generated README file](https://github.com/cynogriffin/auto-README/blob/main/assets/images/generated.PNG)

## License
##### [Back to Table of Contents](#table-of-contents)

This project is licensed under the MIT license.

## Credits
##### [Back to Table of Contents](#table-of-contents)

For this project, I mainly referenced the documentation for [node.js](https://nodejs.org/api/), especially [File System](https://nodejs.org/api/fs.html), as well as [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), specifically [inquirer](https://www.npmjs.com/package/inquirer).

## Questions
##### [Back to Table of Contents](#table-of-contents)

You can view my other projects on GitHub: [cynogriffin](https://github.com/cynogriffin)

If you have any questions or comments, please feel free to contact me via email at griffinc6@gmail.com.

---
Copyright &copy; 2022 Cody Griffin. All rights reserved.

Licensed under the [MIT License](LICENSE.txt).   