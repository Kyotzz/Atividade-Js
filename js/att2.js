function calculoImc(){
    let altura = parseFloat(document.getElementById("altura").value);
    let peso   = parseFloat(document.getElementById("peso").value);
    let calculo = peso / (altura*altura);
    let situacao ;
    document.getElementById("resultado").innerHTML = calculo.toFixed(2);
    event.preventDefault();

    if(calculo < 17){
        situacao = "Muito abaixo do peso";
        document.getElementById("situacao").style.color = "red";
    } else if(calculo >= 17 && calculo < 18.50 ){
        situacao = "Abaixo do peso";
        document.getElementById("situacao").style.color = "orange";
    } else if(calculo >= 18.50 && calculo <=24.99){
        situacao = "Peso normal";
        document.getElementById("situacao").style.color = "green";
    }else if(calculo >=25 && calculo <=29.99){
        situacao = "Acima do peso";
        document.getElementById("situacao").style.color = "orange";
    }else if(calculo >= 30 && calculo <= 34.99){
        situacao = "Obesidade I";
        document.getElementById("situacao").style.color = "red";
    } else if (calculo >= 35 && calculo <= 39.99){
        situacao = "Obesidade II (severa)";
        document.getElementById("situacao").style.color = "red";
    }else{
        situacao = "Obesidade III (mórbida)";
        document.getElementById("situacao").style.color = "red";
    }
    document.getElementById("situacao").innerHTML = situacao;
}