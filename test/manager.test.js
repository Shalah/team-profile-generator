const employee = require('../develop/lib/employees')
const manager = require('../develop/lib/manager')

describe('manager', () => {


    describe('creating Name', () => {
        it("should possess the name of the the employee", () => {
            const employee = new Employee("Shalkah", 90, "oma@chaddn.com", "2029000000");
            expect(employee.name).toBe("Rim")
        });

    });
    describe('creating ID', () => {
        it("should possess the Id property", () => {
            const employee = new Employee("Tupac", 25, "Shakur@forever.com", "2050070000");
            expect(employee.id).toBe(25)
        })
    })
    describe('creating Email', () => {
        it("should possess the Email property", () => {
            const employee = new Employee("Messi", 184, "ce@jeme.com", "4029000000");
            expect(employee.email).toBe("je@jemyme.com")
        })
    })
    describe('create the officenumber property', () => {
        it("should get the office number", () => {
            const employee = new Employee("Messi", 184, "ce@jeme.com", "1029000000");
            expect(employee.officeNum).toBe("1029000000")
        })
    })
    describe('getName', () => {
        it("should get the name using this function", () => {
            const employee = new Employee("Elie", 1, "mochi@on.com", "2029000001");
            expect(employee.getName()).toBe("Elie")
        })
    })
    describe('getId', () => {
        it("should get the Id using this function", () => {
            const employee = new Employee("Lolita", 100, "ki@tir.com", "2009009000");
            expect(employee.getId()).toBe(100)
        })
    })
    describe('getEmail', () => {
        it("should get the Email using this function", () => {
            const employee = new Employee("Mma", 50, "monstersby@ye.com", "2019039000");
            expect(employee.getEmail()).toBe("monstersby@ye.com")
        })
    })
    describe('getRole', () => {
        it("should return Employee with all the properties", () => {
            const employee = new Employee("Rie", 110, "theone@school.com", "2049000750");;
            expect(employee.getRole()).toBe("Employee")
        })
    })
})