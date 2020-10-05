const Sequelize = require('sequelize');
const database = require('../util/database');

const User = database.define('users',{
    email:{
        allowNull:false,
        primaryKey:true,
        type:Sequelize.STRING
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    }

});
module.exports = User;
