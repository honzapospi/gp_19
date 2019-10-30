const http = require("http")


const server = http.createServer((request, response) => {
    if (request.url === "/user") {
        response.setHeader("Content-Type", "Application/json")
        response.end(JSON.stringify({ name: "honza2" }))
    } else if (request.url === "/") {
        response.end("home")
    } else {
        response.statusCode = 404
        response.end("page not found")
    }
})


server.listen("8080", () => {
    console.log("Server is up");
})

console.log("done")