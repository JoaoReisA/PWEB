module.exports = function (app) {
    app.get('/historia', (req, res) => {
        res.render("informacao/historia")
    })
};