

function renderLicenseBadge(license) {
  badge = `![badge](https://img.shields.io/badge/license-${license}-green)`
  return badge
};

function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      text = "https://opensource.org/licenses/MIT"
      break;
    case 'GNU GPLv3':
      text = "https://opensource.org/licenses/GPL-3.0"
      break;
    case 'Apache 2.0':
      text = "https://opensource.org/licenses/Apache-2.0"
      break;
    case 'none':
      text = "";

  }
  return text;
};


function generateMarkdown({ title, description, installation, usage, contributing, license, githubId, email }) {
  const markdown = `# ${title}

${renderLicenseBadge(license)}

# Table of Contents
---
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

## Questions
If you have any questions I can be contacted at ${email}

link to my [github](https://github.com/${githubId})

## License
[${license}](${renderLicenseLink(license)})`;

  return markdown
};

module.exports = generateMarkdown;

