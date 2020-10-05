const Sequelize = require('sequelize');
const database = require('../util/database');

const Session = database.define('sessions',{
    email:{
        allowNull:false,
        type:Sequelize.STRING
    },
    token:{
        type:Sequelize.STRING,
        allowNull:false
    }

});
module.exports = Session;
