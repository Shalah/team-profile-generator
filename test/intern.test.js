const employee = require('../develop/lib/employees')
const intern = require('../develop/lib/intern')

describe('intern', () => {

    const intern = new intern("Raq", 20, "oma@chadn.com", "Columbia U");

    describe('testing intern properties', () => {
        it("should possess the name of the the intern", () => { 
            expect(intern.name).toBe("Raq")
        });
        it("should possess the Id property", () => {
            expect(intern.id).toBe(20)
        })
        it("should possess the Email property", () => {
            expect(intern.email).toBe("oma@chadn.com")
        })
        it("should get the School", () => {
            expect(intern.xtra).toBe("Columbia U")
        })

    });
    
    
    describe('testing intern functions', () => {
        it("should get the name using this function", () => {
            expect(intern.getName()).toBe("Raq")
        })
        it("should get the Id using this function", () => {
            expect(intern.getId()).toBe(20)
        })
        it("should get the Email using this function", () => {
            expect(intern.getEmail()).toBe("oma@chadn.com")
        })
        it("should get the school with this function", () => {
            expect(intern.getxtra()).toBe("Columbia U")
        })
        it("should return intern with all the properties", () => {
            expect(intern.getRole()).toBe("intern")
        })
    })
    
})