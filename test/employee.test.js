const employee = require('../develop/lib/employees')


describe('employee', () => {


    const manager = new manager("Melo", 5, "omaleo@eta.com");

    describe('testing manager properties', () => {
        it("should possess the name of the the manager", () => { 
            expect(manager.name).toBe("Melo")
        });
        it("should possess the Id property", () => {
            expect(manager.id).toBe(5)
        })
        it("should possess the Email property", () => {
            expect(manager.email).toBe("omaleo@eta.com")
        })

    });
    
    
    describe('testing manager functions', () => {
        it("should get the name using this function", () => {
            expect(manager.getName()).toBe("Melo")
        })
        it("should get the Id using this function", () => {
            expect(manager.getId()).toBe(5)
        })
        it("should get the Email using this function", () => {
            expect(manager.getEmail()).toBe("omaleo@eta.com")
        })
        it("should return manager with all the properties", () => {
            expect(manager.getRole()).toBe("manager")
        })
    })
})