const employee = require('../develop/lib/employees')
const engineer = require('../develop/lib/engineer')

describe('intern', () => {

    const engineer = new engineer("Moriba", 60, "me@youhe.com", "Shalsh");

    describe('testing intern properties', () => {
        it("should possess the name of the the engineer", () => { 
            expect(engineer.name).toBe("Moriba")
        });
        it("should possess the Id property", () => {
            expect(engineer.id).toBe(60)
        })
        it("should possess the Email property", () => {
            expect(engineer.email).toBe("me@youhe.com")
        })
        it("should get the Github account", () => {
            expect(engineer.xtra).toBe("Shalsh")
        })

    });
    
    describe('testing intern functions', () => {
        it("should get the name using this function", () => {
            expect(engineer.getName()).toBe("Moriba")
        })
        it("should get the Id using this function", () => {
            expect(engineer.getId()).toBe(60)
        })
        it("should get the Email using this function", () => {
            expect(engineer.getEmail()).toBe("me@youhe.com")
        })
        it("should get the github with this function", () => {
            expect(engineer.getxtra()).toBe("Shalsh")
        })
        it("should return engineer with all the properties", () => {
            expect(engineer.getRole()).toBe("engineer")
        })
    })
    
})