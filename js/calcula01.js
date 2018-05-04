function showElements(capturaFormulario){
    var v01 = capturaFormulario.elements[0].value;
    var v02 = capturaFormulario.elements[1].value;
    var v03 = capturaFormulario.elements[2].value;

    var temValor= 0;
    var operacao = 0;

    //Valida se foi digitado o valor no primeiro campo
    if (v01 == ""){
        alert("Insira o Primeiro Valor !");
    }
    else{
        temValor += 1;
    }

    //Valida se foi digitado o valor no segundo campo
    if (v03 == ""){
        alert("Insira o Segundo Valor !");
    }
    else{
        temValor += 1;
    v01 = parseInt(v01);
    v01 = parseInt(v01);
}
    
    // Converte Valores em Inteiros
    v01 = parseInt(v01);
    v03 = parseInt(v03);

    //Valida se foi digitado o operador matemático
    if(v02 == ""){
        alert("Insira o sinal do operador matemático");
    }
    
    else if(v02 == "+"){
        temValor += 1;
        operacao = v01 + v03;
    }

    else if(v02 == "-"){
        temValor += 1;
        operacao = v01 - v03;
    }

    else if(v02 == "*"){
        temValor += 1;
        operacao = v01 * v03;
    }

    else if(v02 == "/"){
        temValor += 1;
        operacao = v01 / v03;
    }

    else{
        alert("Insira um sinal de operação válido ( + - * / )");
    }

    // Exibe os resultados

    if(temValor >= 3){
        document.formCalculadora1.resultado.value = operacao;
    }
    else{
        alert("A operação não pode ser executada!");
    }
}


