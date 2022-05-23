function  validar(){
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("msg").value;

    if(nome == "" || email == "" || msg == ""){
        alert("preencha todos os campos");
        return
    }
    
}