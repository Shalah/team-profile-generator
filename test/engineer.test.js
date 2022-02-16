const employee = require('../develop/lib/employees')
const engineer = require('../develop/lib/engineer')

describe('engineer', () => {


    describe('creating Name', () => {
        it("should possess the name of the the employee", () => {
            const employee = new Employee("Rim", 30, "oma@chadn.com", "Shalah");
            expect(employee.name).toBe("Rim")
        });

    });
    describe('creating ID', () => {
        it("should possess the Id property", () => {
            const employee = new Employee("Tupac", 25, "Shakur@forever.com", "Shaldah");
            expect(employee.id).toBe(25)
        })
    })
    describe('creating Email', () => {
        it("should possess the Email property", () => {
            const employee = new Employee("Messi", 184, "ce@jeme.com", "Bono");
            expect(employee.email).toBe("ce@jeme.com")
        })
    })
    describe('create the Github property', () => {
        it("should get the GitHub", () => {
            const employee = new Employee("Messi", 184, "ce@jeme.com", "Ella");
            expect(employee.officeNum).toBe("Ella")
        })
    })
    describe('getName', () => {
        it("should get the name using this function", () => {
            const employee = new Employee("Ilaix", 1, "mochi@on.com", "Proofo");
            expect(employee.getName()).toBe("Ilaix")
        })
    })
    describe('getId', () => {
        it("should get the Id using this function", () => {
            const employee = new Employee("lita", 75, "ki@hir.com", "Mikael");
            expect(employee.getId()).toBe(75)
        })
    })
    describe('getEmail', () => {
        it("should get the Email using this function", () => {
            const employee = new Employee("Matma", 5, "monstersby@ye.com", "James");
            expect(employee.getEmail()).toBe("monstersby@ye.com")
        })
    })
    describe('getRole', () => {
        it("should return Employee with all the properties", () => {
            const employee = new Employee("Riyam", 10, "the@school.com", "Bond");;
            expect(employee.getRole()).toBe("engineer")
        })
    })
})