const inquirer = require("inquirer");
const fs = require("fs");

function processAns(ans) {
  const readMe = `
  # ${ans.projName}
****
![license](https://img.shields.io/badge/license-${ans.projLic}-lightgrey&?style=for-the-badge&logo=appveyor)


${ans.projDesc}

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Tests](#tests)
  4. [Contributions](#contributions)
  5. [Questions](#questions)
  ****
  ## Installation
  
  ${ans.projInst}
  
  ****
  ## Usage
  

  ${ans.projUsage}
  ****
  ## Tests
   
  ${ans.projTest}
  ****
  ## Contributions
 
${ans.projContr}
  ****
## Questions
Github Profile: [github.com/${ans.projGitName}](https://github.com/${ans.projGitName})


E-mail: ${ans.projEmail}


${ans.projQuest}
****
  ## License
  ${ans.projLic}`;

  fs.writeFile("yourNewREADME.md", readMe, (err) => {
    if (err) {
      throw err;
    }
  });
}

inquirer
  .prompt([
    {
      message: "Enter the name of your Project",
      name: "projName",
    },
    {
      message: "Enter a description of your project.",
      name: "projDesc",
    },
    {
      message: "Enter any installation instructions",
      name: "projInst",
    },
    {
      message: "Enter usage information",
      name: "projUsage",
    },
    {
      type: "list",
      name: "projLic",
      message: "Choose your licence.",
      choices: ["MIT", "Apache--2.0", "ISC", "GNU--GPLv3"],
    },
    {
      message: "Enter any contribution instructions.",
      name: "projContr",
    },
    {
      message: "Enter your github user name",
      name: "projGitName",
    },
    {
      message: "Enter your email address",
      name: "projEmail",
    },
    {
      message: "Enter instructions to contact you for questions",
      name: "projQuest",
    },
    {
      message: "Enter instructions for testing",
      name: "projTest",
    },
  ])
  .then(processAns);
