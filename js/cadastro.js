/* Função Validar */
function validar() {
  // pegando o valor do nome pelos names
  var nome = document.getElementById("nome");
  var sobrenome = document.getElementById("sobrenome");
  var email = document.getElementById("email");
  var senha = document.getElementById("senha");
  var confsenha = document.getElementById("confsenha")

  // verificar se o nome está vazio
  if (nome.value == "") {
    alert("Nome não informado");

    // Deixa o input com o focus
    nome.focus();
    // retorna a função e não olha as outras linhas
    return;
  }
  if (sobrenome.value == "") {
    alert("Sobrenome não informado");
    sobrenome.focus();
    return;
  }
  if (email.value == "") {
    alert("E-mail não informado");
    email.focus();
    return;
  }
  if (senha.value == "") {
    alert("Senha não informada");
    senha.focus();
    return;
  }
  if (senha.value != confsenha.value) {
    alert("A senha tem que ser igual");
    senha.focus();
    return;
  }
  
 
  alert("Formulário enviado!");
  // envia o formulário
  //formulario.submit();
}