const Sequelize = require('sequelize');
const db = require('../connection/db');

const usuario = db.define('pessoa' , {
    id :{
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false, 
        autoIncrement: true , 
        primaryKey: true
    },
    nome :{
        type: Sequelize.DataTypes.STRING,
        allowNull: false, 
    },
    datanasc :{
        type : Sequelize.DataTypes.DATE,
        allowNull: false,
    },
    email :{
        type: Sequelize.DataTypes.STRING,
        allowNull: false, 
    },
    rg : {
        type: Sequelize.DataTypes.STRING,
        allowNull: false, 
    },
    cep : {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    senha : {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    logado: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = usuario;