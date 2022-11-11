const criandoCartaoController = async(req,res) => {
    console.log(req.body);
    const db = require('../../connection/db');
    const user = require('../../models/cartao');
    //verifica se existe essa tabela no banco caso nao exista ele cria
    await db.sync()
    const {nomecartao, numerocartao,cvv,cpf, validade, datanasc } = req.body
    //desestruturacão
    const newcard = await user.create({
        nomecartao, numerocartao,cvv,cpf, validade, datanasc
    });  
    return res.status(201).json({user: newcard});
}

module.exports = criandoCartaoController;