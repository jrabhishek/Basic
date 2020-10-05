const Sequelize = require('sequelize');

const database = new Sequelize('sqlite:demo.db');
//const sequelize = new Sequelize('postgresql://postgres:admin@localhost:5432/elabs2');
const check =async ()=>{
    try {
        await database.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

}
check()
module.exports = database;




