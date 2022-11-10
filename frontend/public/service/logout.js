function usuarioLogout(){
    const email = localStorage.getItem("emailUsuario");
    fetch("http://localhost:3200/usuarioLogout", {
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email}) 
    })
    .then(res => res.json())
    .then(res=> {
        console.log(res.usuario)
        if(res.usuario.id){
            window.alert(" logout realizado com sucesso")
            window.location.href = "/"
        }else{
           window.alert("Nao foi possivel completa seu logout")
        }
    })
    
}