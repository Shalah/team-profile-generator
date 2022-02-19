const Employees = require('./employees')


// This is the inter class that inherits objects from Employees class
class Intern extends Employees {
    constructor (name, id, email, xtra) {
        super (name, id, email)               // This calls the parent in order to get those arguments
        this.xtra = xtra;
    }

    getxtra = () =>{
        return this.xtra
    }
    getRole = () =>{
        return 'Intern'
    }
}

module.exports = Intern