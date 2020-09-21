const inquirer = require("inquirer");
const fs = require("fs");

function processAns(ans) {
  const readMe = `# ${ans.projName}

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
[github profile:] (https://github.com/${ans.projGitName})
E-mail: ${ans.projEmail}
****
  ## License
  ${ans.projLic}`;

  fs.writeFile("README.md", readMe, (err) => {
    if (err) {
      throw err;
    }
  });
}

inquirer
  .prompt([
    {
      message: "Enter the name of your project",
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
      message: "choose a licence.",
      choices: ["mit", "some choice"],
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
  ])
  .then(processAns);

//   add all questions and capture answers
// create template literal to format md file with user answers
