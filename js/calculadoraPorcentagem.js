function calcularPorcentagem(operador){
    var valor1 = document.formCalculadoraPorcentagem.valor1.value;
    var valor2 = document.formCalculadoraPorcentagem.valor2.value;
    
    if (operador == "somar") {
        var resultadoPorcentagem = parseFloat(valor1) + parseFloat(valor2)*valor1/100;
    }
    else if (operador == "subtrair"){
        var resultadoPorcentagem = parseFloat(valor1) - parseFloat(valor2)*valor1/100;
    }
    else if (operador == "multiplicar"){
        var resultadoPorcentagem = parseFloat(valor1) * parseFloat(valor2)/100;
    }
    else if (operador == "dividir"){
        var resultadoPorcentagem = parseFloat(valor1) / parseFloat(valor2)*valor1/100;
    }
    document.formCalculadoraPorcentagem.resultadoPorcentagem.value = resultadoPorcentagem;
}