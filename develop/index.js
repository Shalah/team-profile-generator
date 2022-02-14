const fs = require ('fs');
const inquirer = require('inquirer');



// This class is a baseline manager class for the rest of the employees
class Manager {
    constructor (name, id, email, officeNum) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNum = officeNum;
    }
}


// This is the engineer class that inherits objects from manager class
class Engineer extends Manager {
    constructor (name, id, email, github) {
        super (name, id, email)               // This calls the parent in order to get those arguments
        this.github = github;
    }
}

// This is the inter class that inherits objects from manager class
class Intern extends Manager {
    constructor (name, id, email, school) {
        super (name, id, email)               // This calls the parent in order to get those arguments
        this.school = school;
    }
}


// This is the set of questions for the manager.
// But also for the rest of the employees
const infoManager = () => {
    return Promise.resolve ([                      // Or maybe try this "inquirer.prompt([])"
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
        },
    ])
}


// This is the set of questions for the engineer only
// Which get the first set of questions from the manager
const infoEngineer = () => {
    return Promise.resolve ([
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
    return Promise.resolve ([                           // Or maybe try this "inquirer.prompt([])"
        {
            type: "input",
            name: "school",
            message: "What is the intern's school?"
        },
    ])
}



// This function is asking if another employee is to be added to the team
const addAnotherEmp = () => {
    return {
        
        type: "list",
        name: "addTeamMember",
        message: "What type of team member would you like to add?",
        choices: [{name: "Engineer", value: 0}, {name: "Intern", value: 1}, {name: "I do not want to add more team members", value: 2}]
        //choices: [{ name: "Investigation Discovery", value: 0 }, { name: "CNN", value: 1 }, { name: "Fox News", value: 2}, { name: "TLC", value: 3}]

    }
    .then((answers) => {
        if (responses.addTeamMember === 0) {
            console.log("Engineer");
            infoEngineer ();
        }
        else if (responses.addTeamMember === 1) {
            console.log("Intern");
            infoIntern ();
        }
        else {
            console.log("Done");
        }
    })
}

