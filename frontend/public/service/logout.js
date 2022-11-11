function usuarioLogout(){
    const email = localStorage.getItem("emailUsuario");
    fetch("http://localhost:3200/usuarioLogout", {
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email}) 
    })
    .then(res => res.json())
    .then(res=> {
        if(res.usuario.id){
            localStorage.removeItem("logado")
            console.log(localStorage.getItem("logado"))
            swal("Bom Trabalho", "Você Foi Deslogado!", "success");
            setTimeout(()=> window.location.href = "/", 3000 )
        }else{
           window.alert("Nao foi possivel completa seu logout")
        }
    })
    
}