const dbquery = require("./fake_db")


console.time("1")
console.time("2")


dbquery("select 1", (err, result1) => {
    console.timeEnd("1")
    if (result1) {
        dbquery("select 2", (err, result2) => {
            if (result2) {
                console.timeEnd("2")
                console.log("hura", result1, result2)
            }
        })
    } else {
        console.error(err);
    }
})


console.log("end")