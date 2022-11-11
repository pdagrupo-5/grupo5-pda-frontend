let logado = localStorage.getItem("logado")
if(logado){
    document.getElementById("header_conta__entrar").style.display = "none"
    document.getElementById("header_conta__criar").style.display = "none"
}else{
    document.getElementById("header_conta__entrar").style.display = "flex"
    document.getElementById("header_conta__criar").style.display = "flex"
    document.getElementById("header_conta__sair").style.display = "none"
}