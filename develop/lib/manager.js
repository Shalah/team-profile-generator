// This is the Manager class that inherits objects from Employees class
const Employees = require('./employees')

class Manager extends Employees {
    constructor (name, id, email, xtra) {
        super (name, id, email) 
        this.xtra = xtra;
    }

    getxtra = () =>{
        return this.xtra
    }

    getRole = () =>{
        return 'Manager'
    }
}

module.exports = Manager