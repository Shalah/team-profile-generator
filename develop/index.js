const fs = require ('fs');
const inquirer = require('inquirer');




const generateReadme = ({employeeData}) =>

  
`

`;




inquirer
  .prompt([
    {
      type: 'input',
      name: "employeeData",
      message: "What is the team manager's name",
    },
    // {
    //     type: 'input',
    //     name: "engineerName",
    //     message: "What is the engineer name",
    // },
    // {
    //     type: 'input',
    //     name: "internName",
    //     message: "What is the intern name",
    // },

    {
        type: "input",
        name: "id",
        message: "What is the manager's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the manager's email?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?"
    },

    {
        type: "list",
        name: "teamMember",
        message: "What type of team member would you like to add?",
        choices: ["Manager", "Engineer", "Intern"]
    },

    
    
   
   
    
])

.then((employeeData) => {
console.log (employeeData)
    if(employeeData.teamMember === 'Engineer'){
        inquirer
    .prompt([
        {
        type: 'input',
        name: "employeeData",
        message: "What is the engineer's name",
        },
    ])
}
else if(employeeData.teamMember === 'Intern'){
    inquirer
    .prompt([
        {
        type: 'input',
        name: "employeeData",
        message: "What is the intern's name",
        },
       
    ])
}

const readmeContent = generateReadme(employeeData);
    // if (teamMember == )
// fs.writeFile('index.html', readmeContent, (err) =>
//     err ? console.log(err) : console.log('Successfully created an index.html file!')
//     );
});