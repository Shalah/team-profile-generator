


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
        return 'Employees'
    }
}

module.exports = Employees