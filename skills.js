function calculadora(valor1, valor2, operacion) {
    switch (operacion) {
        case 'somar':
            return valor1 + valor2;
        case 'subtrair':
            return valor1 - valor2;
        case 'multiplicar':
            return valor1 * valor2;
        case 'dividir':
            if (valor2 === 0) {
                return 'Erro: Divisão por zero não é permitida.';
            }
            return valor1 / valor2;
        default:
            return 'Operação não válida';
    }
}

module.exports = calculadora;