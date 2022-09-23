function usuarioLogin(){
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value
    fetch("http://localhost:3200/usuarioLogin", {
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(
            {
                email ,
                senha ,

            }
        )
       
    })
     
    .then(res => res.json())
    .then(res=> {
        if(res.user.id){
            window.alert(" login realizado com sucesso")
            window.location.href = "/carros"
        }else{
            window.alert("Nao foi possivel completa seu login")
        }
    })
    .catch(error =>{
        window.alert(error)
    })
}