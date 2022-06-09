module.exports = function (app) {
    app.get('/professores', (req, res) => {

    
        async function getProfessores(){
            try{
                const sqlConfig = require('../config/dbConnection');

                const pool = await sqlConfig();

                const results = await pool.request().query('SELECT * from PROFESSORES')

                res.render("informacao/professores", {profs: results.recordset});
            }catch(err){
                console.log(err)
            }
        }
        
        const professores = getProfessores();
        // res.render("informacao/professores")
    })
};