const fs = require ('fs');
const inquirer = require('inquirer');


// This class is a baseline manager class for the rest of the employees
class Manager {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
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

   
