


// This is the inter class that inherits objects from Employees class
class Intern extends Employees {
    constructor (name, id, email, school) {
        super (name, id, email)               // This calls the parent in order to get those arguments
        this.school = school;
    }

    getSchool = () =>{
        return this.school
    }
    getRole = () =>{
        return 'Intern'
    }
}

module.exports = Intern