const dbquery = require("./fake_db")



test("test of query 'select 1'", (done) => {
    dbquery("select 1", (err, result) => {
        expect(result.name).toBe("pepa")
        expect(result).toEqual({ name: "pepa" })
        done()
    })
})