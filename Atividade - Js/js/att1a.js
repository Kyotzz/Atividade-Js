function media(){
    let nota1 = parseFloat(prompt("Informe a 1° nota:"));
    let nota2 = parseFloat(prompt("Informe a 2° nota:")) ;
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