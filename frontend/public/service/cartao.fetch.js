function criaCartao(){
    const nomecartao  = document.getElementById("nomecartao").value
    const numerocartao = document.getElementById("numerocartao").value
    const validade = document.getElementById("validade").value
    const datanasc = document.getElementById("datanasc").value
    const cvv = document.getElementById("cvv").value
    const cpf = document.getElementById("cpf").value
    fetch("http://localhost:3200/cartao", {
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(
            {
                nomecartao ,
                numerocartao ,
                validade,
                datanasc ,
                cvv ,
                cpf , 
            }
        )
       
    })
    .then(res => res.json())
    .then(res=> {
        if(res.user.id){
            swal("Bom Trabalho", "Compra efetuada com sucesso", "success");
            setTimeout(()=> window.location.href = "/", 4000 )
        }else{
            window.alert("Nao foi possivel completa sua compra")
        }
    })
    .catch(error =>{
        window.alert(error)
    })
}