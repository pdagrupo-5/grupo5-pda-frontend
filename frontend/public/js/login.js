var usuario;
//fazer um fecht do login e inserir a resposta na variavel usuario.
// fazer uma outra funçao que valida se existe um usuario ou nao se nao ouver usuario ira retorna um false se tive ira retorna um true.

function  validar(){
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");
    if(email.value == ""){
        alert("E-mail não informado");
        //email.focus()
        return
    }
    if(senha.value == ""){
        alert("senha não informada");
        return
    }
    
}