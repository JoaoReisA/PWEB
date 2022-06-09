var sql = require('mssql/msnodesqlv8');

module.exports = function(){
    const config = {
        user: "BD2013016",
        password: "Nanda123",
        database: "BD",
        server: "192.168.1.6",
        driver: 'msnodesqlv8',
    }
    return sql.connect(config);
}