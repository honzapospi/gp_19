module.exports = (sql, cb) => {
    setTimeout(() => {
        if (sql === "select 1") {
            cb(false, { name: "pepa" })
        } else if (sql === "select 2") {
            cb(false, { name: "honza" })
        } else {
            cb({ message: "invalid query" })
        }
    }, 1000)
}