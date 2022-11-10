const pegandoUsuarioController = async (req,res)=>{
    let usuario = require('../../models/usuario');
    const usuarios = await usuario.findAll();
    return res.status(200).json({usuario: usuarios})
}

module.exports = pegandoUsuarioController;