const Sequelize = require('sequelize');

// Conexão com o banco de dados
const sequelize = new Sequelize('sql10614848','sql10614848','Qqivb8FQD5',{
    host:"sql10.freemysqlhosting.net",
    port: "3306",
    dialect: 'mysql'
});


module.exports = {
    Sequelize: Sequelize ,
    sequelize: sequelize
}

