function media() {
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let situacao;
    let calculo = (nota1 + nota2) / 2;
    document.getElementById("resultado").innerHTML = calculo;
    event.preventDefault();

    if(calculo >= 6){
        situacao = "Aprovado";
        document.getElementById("situacao").style.color = "blue";
    }else{
        situacao = "Reprovado"
        document.getElementById("situacao").style.color = "red";
    }
    document.getElementById("situacao").innerHTML = situacao;
}
