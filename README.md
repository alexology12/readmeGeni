# Readme Generator
A professional readme generator that dynamically generates a professional README.md file from a user's input using the Inquirer package

# Description
This application creates a professional readme using Node js v16. The user will be asked multiple questions about the project via prompts. He/she has to type in relevant information in the terminal and the application generates a professional README markdown file based on the user's inputs.

## User story
>>
>>AS A developer
>>I WANT a README generator
>>SO THAT I can quickly create a professional README for a new project
>>

## Acceptance Criteria
GIVEN a command-line application that accepts user input

1. WHEN I am prompted for information about my application repository
   THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
   
2. WHEN I enter my project title
   THEN this is displayed as the title of the README
   
3. WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
   THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
   
4. WHEN I choose a license for my application from a list of options
   THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
   
5. WHEN I enter my GitHub username
   THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
   
6. WHEN I enter my email address
   THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
   
7. WHEN I click on the links in the Table of Contents
   THEN I am taken to the corresponding section of the README

## Installation
To install the readme-generator, the user needs to follow these steps:
1. Clone the repository to you local machine
2. Install inquirer, using npm i inquirer@8.2.4.
3. Install the dependencies using the command "npm install"
4. Navigate to index.js and type in "node index.js" to start the project.

## Usage
Run the readme-generator using the command line "node index.js" in the terminal
Follow the prompts and provide relevant inputs about the project
Once the user answered all the questions, he/she will see a message in the terminal saying "README file generated successfully!"
The README.md file will be generated


 Video Link - https://drive.google.com/file/d/1WcQ5IJnFdMZz7wMi38_oYCl2rKB7saby/view?usp=sharing




