module.exports = {
    count: (...c) => {
        return c.reduce((n, i) => i + n)
    }
} 