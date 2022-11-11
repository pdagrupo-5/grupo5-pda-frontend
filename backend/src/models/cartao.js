const Sequelize = require('sequelize');
const db = require('../connection/db');

const veiculo = db.define('cartao' , {

    id :{
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false, 
        autoIncrement: true , 
        primaryKey: true
    },
    nomecartao :{
        type: Sequelize.DataTypes.STRING,
        allowNull: false, 
    },
    numerocartao :{
        type : Sequelize.DataTypes.NUMBER,
        allowNull: false,
    },
    validade :{
        type: Sequelize.DataTypes.STRING,
        allowNull: false, 
    },
    cvv : {
        type: Sequelize.DataTypes.NUMBER,
        allowNull: false, 
    },
    cpf : {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    datanasc: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
    }
});

module.exports = veiculo;