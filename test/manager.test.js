const employee = require('../develop/lib/employees')
const manager = require('../develop/lib/manager')

describe('manager', () => {


    const manager = new manager("Mechon", 25, "omechio@chn.com", "22234567889");

    describe('testing manager properties', () => {
        it("should possess the name of the the manager", () => { 
            expect(manager.name).toBe("Mechon")
        });
        it("should possess the Id property", () => {
            expect(manager.id).toBe(25)
        })
        it("should possess the Email property", () => {
            expect(manager.email).toBe("omechio@chn.com")
        })
        it("should get the office number", () => {
            expect(manager.xtra).toBe("22234567889")
        })

    });
    
    
    describe('testing manager functions', () => {
        it("should get the name using this function", () => {
            expect(manager.getName()).toBe("Mechon")
        })
        it("should get the Id using this function", () => {
            expect(manager.getId()).toBe(25)
        })
        it("should get the Email using this function", () => {
            expect(manager.getEmail()).toBe("omechio@chn.com")
        })
        it("should get the office number with this function", () => {
            expect(manager.getxtra()).toBe("22234567889")
        })
        it("should return manager with all the properties", () => {
            expect(manager.getRole()).toBe("manager")
        })
    })
})
