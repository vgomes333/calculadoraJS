function calcular(operador) {
    var valor1 = document.formCalculadora2.valor1.value;
    var valor2 = document.formCalculadora2.valor2.value;

    if (operador == "somar") {
        var res = parseInt(valor1) + parseInt(valor2);
    } else {
        if (operador == "subtrair") {
            var res = valor1 - valor2;
        } else {
            if (operador == "multiplicar") {
                var res = valor1 * valor2;
            } else {
                var res = valor1 / valor2;
            }
        }
    }

    document.formCalculadora2.res.value = res;
}