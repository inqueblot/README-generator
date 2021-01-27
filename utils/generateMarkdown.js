
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != "none") {
    badge = "![badge](https://img.shields.io/badge/license-${license}-green)"
  }
  return badge
}
renderLicenseBadge()
console.log(badge)
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != "none") {
    badge = "![badge](https://img.shields.io/badge/license-${license}-green)"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != "none") {
    badge = "![badge](https://img.shields.io/badge/license-${license}-green)"
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

