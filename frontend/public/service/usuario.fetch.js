function criaUsuario(){
    const nome  = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const rg = document.getElementById("rg").value
    const datanasc = document.getElementById("datanasc").value
    const senha = document.getElementById("senha").value
    const cep = document.getElementById("cep").value
    fetch("http://localhost:3200/usuario", {
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(
            {
                nome ,
                email ,
                rg ,
                datanasc ,
                senha ,
                cep , 
            }
        )
       
    })
    .then(res => res.json())
    .then(res=> {
        if(res.user.id){
            window.alert("cadastro realizado com sucesso")
            window.location.href = "/carros"
        }else{
            window.alert("Nao foi possivel completa seu cadastro")
        }
    })
    .catch(error =>{
        window.alert(error)
    })
}

