const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const prompts = require("inquirer/lib/prompts"); //Not sure how precisely the starter code was indicating to go about this with the "Choices" constructor, but this ought to work

const projectTeamArray[];

function beginningPrompt() {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of your project's manager?"
      },
      {
        type: "input",
        name: "id",
        message: "What is your project manager's employee ID?"
      },
      {
        type: "input",
        name: "email",
        message: "What is your project manager's email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the office number of your project?"
      }
    ]).then(function(answers) {

      let role = "Project Manager";

      let projectManager = (answers.name, answers.id, answers.email, answers.officeNumber, role);

      projectTeamArray.push(projectManager);
  
      addEmployee();

    })
  };

function addEmployee() {
    return inquirer.prompt([
      {
        type: "confirm",
        name: "add",
        message: "Would you like to add an employee?"
      },
      {
        type: "rawlist",
        name: "whichType",
        when: (answer) => answer.add === true,
        message: "Please select which type of employee:"
        choices: ["Engineer", "Intern", "Another Manager"],
      },
      {
        type: "rawlist",
        name: "whatNow",
        when: (answer) => answer.add === false,
        message: "What would you like to do?"
        choices: ["Go Back", "Display Info"],
      },
    ]);
  }.then(answer => {
      switch (answer) {
        case answer.whichType === "Engineer";
        inquirer.prompt(prompts.allEmployeesPrompt).then((answers) => {
          inquirer.prompt(prompts.engineerPrompt).then((engineeringAnswers) => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, engineeringAnswers.github);
            projectTeamArray.push(engineer);

            addEmployee();
          });
  
        

      if (answers.whichType === "Intern") { internPrompt() };
      if (answers.whichType === "Another Manager") { managerPrompt() };
      if (answers.whatNow === "Go Back") { addEmployee() };
      if (answers.whatNow === "Display Info") { generateHTML(outputPath, render(projectTeamArray)) };   
  })



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
