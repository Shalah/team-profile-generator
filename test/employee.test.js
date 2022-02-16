const employee = require('../develop/lib/employees')


describe('employee', () => {


    describe('creating Name', () => {
        it("should possess the name of the the employee", () => {
            const employee = new Employee("Rim", 27, "ria@chaolin.com");
            expect(employee.name).toBe("Rim")
        });

    });
    describe('creating ID', () => {
        it("should possess the Id property", () => {
            const employee = new Employee("BIG", 25, "thenotoriousbig@forever.com");
            expect(employee.id).toBe(25)
        })
    })
    describe('creating Email', () => {
        it("should possess the Email property", () => {
            const employee = new Employee("Jessica", 1884, "je@jemyme.com");
            expect(employee.email).toBe("je@jemyme.com")
        })
    })
    describe('getName', () => {
        it("should get the name using this function", () => {
            const employee = new Employee("Elle", 4, "mochi@on.com");
            expect(employee.getName()).toBe("Elle")
        })
    })
    describe('getId', () => {
        it("should get the Id using this function", () => {
            const employee = new Employee("Rim", 27, "loki@thor.com");
            expect(employee.getId()).toBe(27)
        })
    })
    describe('getEmail', () => {
        it("should get the Email using this function", () => {
            const employee = new Employee("Rim", 27, "monstersby@kanye.com");
            expect(employee.getEmail()).toBe("monstersby@kanye.com")
        })
    })
    describe('getRole', () => {
        it("should return Employee with all the properties", () => {
            const employee = new Employee("Rim", 27, "theone@school.com");;
            expect(employee.getRole()).toBe("Employee")
        })
    })
})