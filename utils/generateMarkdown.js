const generateMarkdown = (data) => {
  return `
# ${data.title}

[![GitHub version](https://badge.fury.io/gh/yourusername%2Fyourrepo.svg)](https://badge.fury.io/gh/yourusername%2Fyourrepo)
[![Build Status](https://travis-ci.org/yourusername/yourrepo.svg?branch=master)](https://travis-ci.org/yourusername/yourrepo)
[![Coverage Status](https://coveralls.io/repos/github/Ash0422/09_README_Generator/badge.svg?branch=master)](https://coveralls.io/github/Ash0422/09_README_Generator?branch=master)

## Table of Contents
- [Description](#description)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [FAQ](#faq)
- [Future Development](#future-development)
- [Change Log](#change-log)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}

## Screenshots
![image of the application 1](${data.screenshot1})
![image of the application 2](${data.screenshot2})
![image of the application 3](${data.screenshot3})

## Installation
${data.installation}

## Usage
${data.usage}

You can also watch a video demonstration of the application [here](${data.video}).

## FAQ
- Q: How does this application solve the problem?
  A: This application solves the problem by providing a user-friendly interface and efficient algorithms to perform the specific task.

## Future Development
- Add new feature X
- Improve performance of feature Y

## Change Log
- v1.0: Initial release
- v1.1: Bug fix for issue #23

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any additional questions, please contact me at ${data.email} or visit my GitHub profile at https://github.com/${data.github}.
![Profile Picture](${data.profilePicture})
`
}

module.exports = generateMarkdown;
