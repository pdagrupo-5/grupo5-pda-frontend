const criandoUsuarioController = async(req,res) => {
    console.log(req.body);
    const db = require('../../connection/db');
    const user = require('../../models/usuario');
    //verifica se existe essa tabela no banco caso nao exista ele cria
    await db.sync()
    const {nome, datanasc,email,rg, cep, senha } = req.body
    //desestruturacão
    const newuser = await user.create({
        nome , datanasc, email, rg, cep, senha, logado: 0
    });
    if(newuser.id){
        await user.update({
         logado: 1, 
         email: newuser.email,
         senha: newuser.senha,
            rg: newuser.rg,
            cep: newuser.cep,
            datanasc: newuser.datanasc,
            id: newuser.id

        }, {
            where: {id: newuser.id }
        })
    }
    
    return res.status(201).json({user: newuser});
}

module.exports = criandoUsuarioController;


//