module.exports = reqFilter = (req, resp, next) => {
    if (!req.query.age) {
        resp.send("Please valid age")
    } else if (req.query.age < 18) {
        resp.send("You can not access the page")
    } else {
        next();
    }
}