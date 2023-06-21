// a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseLink;
  switch (license) {
    case "GNU":
      licenseLink = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
      break;
    case "MIT":
      licenseLink = "![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)";
      break;
    case "Mozilla":
      licenseLink = "![License: Mozilla](https://img.shields.io/badge/License-MPL%202.0-orange.svg)";
      break;
    case "Boost":
      licenseLink = "![License: Boost](https://img.shields.io/badge/License-BSL%201.0-blue.svg)";
      break;
    case "Apache":
      licenseLink = "![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
      break;
    case "Unlicense":
        licenseLink = "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)";
      break;
    default:
      licenseLink = " ";
      break;
}
return licenseLink;
}

// a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseName;
  let licenseLink;

  switch (license) {
    case "GNU":
      licenseName = "GNU General Public License";
      licenseLink = "https://choosealicense.com/licenses/agpl-3.0/";
      break;
    case "MIT":
      licenseName = "MIT License";
      licenseLink = "https://choosealicense.com/licenses/mit/";
      break;
    case "Mozilla":
      licenseName = "Mozilla Public License 2.0";
      licenseLink = "https://choosealicense.com/licenses/mpl-2.0/";
      break;
    case "Boost":
      licenseName = "Boost Software License 1.0";
      licenseLink = "https://choosealicense.com/licenses/bsl-1.0/";
      break;
    case "Apache":
      licenseName = "Apache License 2.0";
      licenseLink = "https://choosealicense.com/licenses/apache-2.0/";
      break;
    case "Unlicense":
      licenseName = "Unlicense";
      licenseLink = "https://choosealicense.com/licenses/unlicense/";
      break;
    default:
      licenseName = "No License selected";
      licenseLink = "";
      break;
}
return `[${licenseName}](${licenseLink})`;
}


function renderLicenseSection(license) {
  let licenseSection = "";
  if (license != "NONE") {
    licenseSection += "## License\n";
    licenseSection += renderLicenseLink(license)
    
  }

  return licenseSection;
}


// function to generate markdown for README
const generateMarkdown = (data) => {
  return `
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Inquirer](https://img.shields.io/badge/Inquirer-0d0d0d?style=for-the-badge&logo=inquirer&logoColor=white)](https://www.npmjs.com/package/inquirer)
[![fs](https://img.shields.io/badge/fs-03599C?style=for-the-badge)](https://nodejs.org/api/fs.html)
[![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/) 

# ${data.title}


## Inspiration 

${data.inspiration}

## Description

${data.description}


## Table of contents

- [Installation](#installation)
- [Project Usage](#project-usage)
- [Intended User](#intended-user)
- [Contributions](#contributions)
- [Tests](#tests)
- [Link to the deployed page](#link)
- [Questions](#questions)
- [Acknowledgements](#acknowledgements)
- [References](#references)
- [Experience](#my-experience)

${renderLicenseSection(data.license)}

## Badge

${renderLicenseBadge(data.license)}

## Installation

${data.installation}

## Project Usage

${data.usage}

## Intended User

${data.user}


## Contributions

${data.contributions}

## Tests 

${data.tests}

## Link  :
>
> Link to the deployed page on github : [${data.title}](https://${data.userName}.github.io/${data.title}/)
>

## Questions

### If you have any further questions about my project, please contact me via ${data.contact}, which is my preferred method of communucation. 
>
>GitHub user Name: [${data.userName}](https://github.com/${data.userName})
>
>gmail id : ${data.email}

## Acknowledgements

Acknowledgements: I would like to thank ${data.acknowledgements}


## References

References : ${data.references}


## My Experience

My Experience while working on this project was : ${data.experience}


© 2023 Swathi Vinod (bootcamp student)

`;
};

module.exports = {generateMarkdown};
