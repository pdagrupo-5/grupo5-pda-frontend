
const login = async(req,res) => {
    const user = require('../../models/usuario');
    //verifica se existe essa tabela no banco caso nao exista ele cria
    const {email,senha} = req.body
    const usuario = await user.findOne({where: {email:email}})
    if(usuario.senha === senha){
        console.log(usuario.senha)
        await usuario.update({
        logado: 1
          }, { where: { id: usuario.id }});
        return res.json({usuario})
    }
    

    return res.status(401).json({mensagem: "email ou senha invalido"})

}

module.exports = login;