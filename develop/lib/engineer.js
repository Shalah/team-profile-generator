


// This is the engineer class that inherits objects from Employees class
class Engineer extends Employees {
    constructor (name, id, email, github) {
        super (name, id, email)               // This calls the parent in order to get those arguments
        this.github = github;
    }

    getGithub = () =>{
        return this.github
    }
    getRole = () =>{
        return 'Engineer'
    }
}

module.exports = Engineer