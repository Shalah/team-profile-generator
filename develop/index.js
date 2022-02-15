const fs = require ('fs');
const inquirer = require('inquirer');



// This class is a baseline manager class for the rest of the employees
class Employees {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        
    }
    getName = () =>{
        return this.name
    }
    getId = () =>{
        return this.id
    }
    getEmail = () =>{
        return this.email
    }
    getRole = () =>{
        return Employees
    }
}

// This is the Manager class that inherits objects from Employees class
class Manager extends Employees {
    constructor (name, id, email, officeNum) {
        super (name, id, email) 
        this.officeNum = officeNum;
    }
}


// This is the engineer class that inherits objects from Employees class
class Engineer extends Employees {
    constructor (name, id, email, github) {
        super (name, id, email)               // This calls the parent in order to get those arguments
        this.github = github;
    }
}

// This is the inter class that inherits objects from Employees class
class Intern extends Employees {
    constructor (name, id, email, school) {
        super (name, id, email)               // This calls the parent in order to get those arguments
        this.school = school;
    }
}


// This is the set of questions for the manager.
// But also for the rest of the employees
const infoManager = () => {
    return inquirer.prompt ([                      // Or maybe try this "inquirer.prompt([])"
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?"
        },
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
        }
    ])

    /*
    .then(function(answers){
        addAnotherEmp();
        fs.appendFile('index.html', infoManager, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
    );
    })
    */
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
        addAnotherEmp();
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
    }
    
    });
}
 
addAnotherEmp();


