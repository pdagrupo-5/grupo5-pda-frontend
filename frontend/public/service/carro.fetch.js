function cadastroCarro(e){
    e.preventDefault()
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
    .then(res=> {
        if(res.user.idveiculo){
           
            swal("Bom Trabalho", "Seu Carro Foi Cadastrado!", "success");
            setTimeout(()=> window.location.href = "/", 3000 )
        }else{
            window.alert("Nao foi possivel completa seu cadastro")
        }
    })
    .catch(error =>{
        window.alert(error)
    })
    
}