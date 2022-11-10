function cadpessoa(Propietario,Modelo,Placa,Status){
    var tb = document.getElementsByClassName("tbpessoas");
    var qtdLinhas = tb.rows.legth;
    var linha = tb.insertRow(qtdLinhas);



    var cellCodigo = linha.insertCell(0)
    var cellPropietario = linha.insertCell(1);
    var cellModelo = linha.insertCell(2);
    var cellPlaca = linha.insertCell(3);
    var cellStatus = linha.insertCell(4);




    cellCodigo.innerHTML = qtdLinhas;
    cellPropietario.innerHTML = Propietario;
    cellModelo.innerHTML = Modelo;
    cellPlaca.innerHTML = Placa;
    cellStatus.innerHTML = Status;


    

   

}


