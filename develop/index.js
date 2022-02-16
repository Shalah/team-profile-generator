const fs = require ('fs');
const inquirer = require('inquirer');

// Importing the classes

const Employees = require('./lib/employees')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')



//global variable to get info on employees
const employeesArr = []
//console.log("This is ", employeesArr)

const empCard = (employee) =>{
    console.log('Single Employee', employee);
    `
    <!-- This is the div for the cards -->
        <div class="card float-center" style="width: 18rem;">
            <div class="card-body bg-primary text-white">
              <h5 class="card-title">${employee.name}</h5>
              <p class="card-text">${employee.role}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${employee.id}</li>
              <li class="list-group-item">${employee.email}</li>
              <li class="list-group-item">${employee.officeNum}</li>
            </ul>
        </div>
    `
    //console.log("THis is my manager name:", employeeArr[0].name)
    //console.log("THis is my manager email:", employeesArr[0].email)

}

// Have the loop in the function so that it does not fire off as soon as the app starts.
function empCardLoop (){
    for (let i= 0; i <= employeesArr.length; i++){  // this function is to be added at the end. Else!!
        empCard(employeesArr[i]);
    }
}



//html file to be used

const generateHTML = (employeesArr) =>
    `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
</head>
<body>
    
    <!-- This is the header -->
    <div class="jumbotron jumbotron-fluid bg-danger text-white">
        <div class="container">
          <h1 class="display-4 d-flex justify-content-center">My Team</h1>
          <p class="lead"></p>
        </div>
    </div>

    <br>
    <br>

        ${empCard()}        // Add EmpCard in here. Missing curly brakets

    </body>
    </html>
    `;





//global questions

const EmpQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the employee's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the employee's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the employee's email?"
    }
]

// This is the set of questions for the manager.
// But also for the rest of the employees
const infoManager = () => {
    return inquirer.prompt ([                      // Or maybe try this "inquirer.prompt([])"
       
        ...EmpQuestions, {
            type: "input",
            name: "officeNum",
            message: "What is the employee's office number?"
        }
    ])

    
    .then(function(answer){
        
        console.log(answer)

        const manager = new Manager (answer.name, answer.id, answer.email, answer.officeNum)
        //console.log(manager)
        employeesArr.push(manager)
        addAnotherEmp();
   
    })
    
}



// This is the set of questions for the engineer only
// Which get the first set of questions from the manager
const infoEngineer = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "github",
            message: "What is the engineer's github?"
        },
    ])
}


// This is the set of questions for the intern only
// Which get the first set of questions from the manager
const infoIntern = () => {
    return inquirer.prompt ([                           // Or maybe try this "inquirer.prompt([])"
        {
            type: "input",
            name: "school",
            message: "What is the intern's school?"
        },
    ])
} 




//Ask for who i want to build?
// This function is asking if another employee is to be added to the team

const addAnotherEmp = () => {
    inquirer.prompt([
    {
    type: 'list',
    name: 'name',
    choices: ['Manager', 'Engineer', 'Intern', 'Quit'],
    //choices: [{name: "Manager", value: 0}, {name: "Engineer", value: 1}, {name: "Intern", value: 2}, {name: "I do not want to add more team members", value: 3}]
    
    }
    ])

    .then(function(answers){
    if (answers.name === "Manager") {
        console.log("Manager");
        infoManager(); 
        
    }
    else if (answers.name === "Engineer") {
        console.log("Engineer");
        infoEngineer();
    } 
    else if (answers.name === "Intern") { 
        console.log("Intern");
        infoIntern();
    }
    else {
        console.log("Done")
        // adding loop function to fire off when all done
        empCardLoop()

        
        fs.appendFile('index.html', generateHTML(employeesArr), (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
        );
        
    }
    
    });
}
 
addAnotherEmp();


