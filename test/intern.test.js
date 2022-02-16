const employee = require('../develop/lib/employees')
const engineer = require('../develop/lib/engineer')

describe('engineer', () => {


    describe('creating Name', () => {
        it("should possess the name of the the employee", () => {
            const employee = new Employee("Raq", 20, "oma@chadn.com", "myuni");
            expect(employee.name).toBe("Raq")
        });

    });
    describe('creating ID', () => {
        it("should possess the Id property", () => {
            const employee = new Employee("Tupac", 15, "Shakur@forever.com", "is college");
            expect(employee.id).toBe(15)
        })
    })
    describe('creating Email', () => {
        it("should possess the Email property", () => {
            const employee = new Employee("Messi", 184, "ome@olome.com", "learning college");
            expect(employee.email).toBe("ome@olome.com")
        })
    })
    describe('create the School property', () => {
        it("should get the School", () => {
            const employee = new Employee("Maisi", 184, "ce@jeme.com", "this university");
            expect(employee.school).toBe("this university")
        })
    })
    describe('getName', () => {
        it("should get the name using this function", () => {
            const employee = new Employee("Moriba", 8, "mochi@on.com", "Georgia University");
            expect(employee.getName()).toBe("Moriba")
        })
    })
    describe('getId', () => {
        it("should get the Id using this function", () => {
            const employee = new Employee("lta", 65, "ki@school.com", "Yale U");
            expect(employee.getId()).toBe(65)
        })
    })
    describe('getEmail', () => {
        it("should get the Email using this function", () => {
            const employee = new Employee("Matma", 5, "sters@yeschool.com", "Pace University");
            expect(employee.getEmail()).toBe("sters@yeschool.com")
        })
    })
    describe('getSchool', () => {
        it("should get the school with this function", () => {
            const employee = new Employee("Riyale", 25, "the@myschool.com", "NYU");;
            expect(employee.getRole()).toBe("intern")
        })
    })
    describe('getRole', () => {
        it("should return Employee with all the properties", () => {
            const employee = new Employee("moktom", 40, "there@ther.com", "Columbia University");;
            expect(employee.getRole()).toBe("intern")
        })
    })
})