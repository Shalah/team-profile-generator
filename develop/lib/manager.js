// This is the Manager class that inherits objects from Employees class
class Manager extends Employees {
    constructor (name, id, email, officeNum) {
        super (name, id, email) 
        this.officeNum = officeNum;
    }

    getRole = () =>{
        return 'Manager'
    }
}