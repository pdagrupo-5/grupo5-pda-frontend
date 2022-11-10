const alterandoVeiculoController = async (req,res)=>{
    let veiculo = require('../../models/veiculo');
    const idveiculo = req.params.id;
    const {ano,cor,placa,propietario} = req.body;
    const carro = await veiculo.findByPk(id); 
    await  veiculo.update({
      modelo: modelo || carro.modelo,
      ano: ano || carro.ano,
      cor: cor || carro.cor,
      placa: placa || carro.placa,
      propietario: propietario || carro.propietario,
      senha: senha || carro.senha
    }, { where: { idveiculo: id }});
    const veiculoAtualizado = await veiculo.findByPk(id);
    return res.json({ mensagem: "Usuario ATUALIZADO com sucesso!",veiculo: veiculoAtualizado});
}

module.exports = alterandoVeiculoController;