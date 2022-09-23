const criandoVeiculoController = async(req,res) => {
    console.log(req.body);
    const db = require('../../connection/db');
    const user = require('../../models/veiculo');
    //verifica se existe essa tabela no banco caso nao exista ele cria
    await db.sync()
    const {modelo, ano,cor,placa,propietario,senha} = req.body;
    //desestruturacão
    const newuser = await user.create({
        modelo ,ano, cor, placa, propietario, senha
    });
    console.log(newuser)
    return res.status(201).json({user: newuser});
}

module.exports = criandoVeiculoController;