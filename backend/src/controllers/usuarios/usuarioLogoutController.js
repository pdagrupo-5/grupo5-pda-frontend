
const logout = async(req,res) => {
    const user = require('../../models/usuario');
    //verifica se existe essa tabela no banco caso nao exista ele cria
    const {email} = req.body
    const usuario = await user.findOne({where: {email:email}})
    
        await usuario.update({
         id: usuario.id,
         nome: usuario.nome,
         datanasc: usuario.datanasc,
         email: usuario.email,
         rg: usuario.rg,
         cep: usuario.cep,
         senha: usuario.senha,   
         logado: 0
          }, { where: { id: usuario.id }});
        return res.json({usuario})

}

module.exports = logout;