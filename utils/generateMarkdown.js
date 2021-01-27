
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != "none") {
    badge = "![badge](https://img.shields.io/badge/license-${license}-green)"
  }
  return badge
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const markdown =
    `#${title}

${renderLicenseBadge()}

#Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Testing](#tests)
- [Questions](#questions)
- [License](#license)



## Description

${description}

## Installation
${installation}
## Usage
${usage}
## Contributing
${contributing}
## Testing

## Questions
If you have any questions I can be contacted at ${email}
link to my [github](https://github.com/${githubId})
## License
[${license}](${LICENSE})

`;
  return markdown
};

module.exports = generateMarkdown;

