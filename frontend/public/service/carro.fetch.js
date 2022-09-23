function cadastroCarro(){
    const propietario = document.getElementById("propietario").value
    const placa = document.getElementById("placa").value
    const modelo= document.getElementById("modelo").value
    const ano= document.getElementById("ano").value
    const senha= document.getElementById("senha").value
    const cor = document.getElementById("cor").value
    fetch("http://localhost:3200/veiculo", {
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(
            {
                propietario ,
                placa ,
                modelo ,
                ano ,
                senha ,
                cor, 
            }
        )
       
    })
     
    .then(res => res.json())
    .then(res=> console.log(res))
}