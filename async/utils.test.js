const { count } = require("./utils")


describe("Test of utils", () => {
    test("Test of count utils", () => {
        expect(count(1, 4, 5)).toBe(10)
        expect(count(1, 4, 5)).not.toBe(9)
    })
})





