module.exports = function (app) {
    app.get('/admin', (req, res) => {
        res.render("admin/adicionar_usuario")
    }
    )
}