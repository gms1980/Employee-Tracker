// const Sequelize = require('sequelize');

// require('dotenv').config();

// // create connection to our db
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//   host: 'localhost',
//   dialect: 'mysql',
//   port: 3306
// });

// module.exports = sequelize;
  
const mysql = require('mysql');
const chalk = require('chalk');



connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'shimshim',
    database: 'schema_db',
    multipleStatements: true
});

connection.connect((err) => {
    if (err) {
        console.log(chalk.white.bgRed(err));
        return;
    }

    console.log(chalk.green(`Connected to db. ThreadID: ${connection.threadId}`));
})

module.exports = connection;

