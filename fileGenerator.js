// template to generate the README file
const fileGenerator = repsonse => {
    let badge = () => {
        switch (response.license) {
            case 'MIT':
                return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            case 'Apache 2.0':
                return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            case 'GPLv3':
                return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            case 'BSD 3':
                return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
        };
    };
    
    return `
        ${badge}
        
        # ${response.name}

        ## Description

        ${response.description}

        ## Table of Contents
        
        *[Installation](#installation)
        *[Usage](#usage)
        *[License](#license)
        *[Contributing](#contributing)
        *[Tests](#tests)
        *[Questions](#questions)

        ## Installation

        ${response.install}

        ## Usage
        ###### [Back to Table of Contents](#Table-of-Contents)

        ${response.usage}

        ## License
        ###### [Back to Table of Contents](#Table-of-Contents)

        This project is licensed under the ${response.license} license.

        ## Contributing
        ###### [Back to Table of Contents](#Table-of-Contents)

        ${response.contribute}

        ## Tests
        ###### [Back to Table of Contents](#Table-of-Contents)

        ${response.tests}

        ## Questions
        ###### [Back to Table of Contents](#Table-of-Contents)

        You can view my other projects on GitHub: [${response.username}](https://github.com/${response.username})

        If you have any questions or comments, please feel free to contact me via email at ${response.email}.

    `;
}