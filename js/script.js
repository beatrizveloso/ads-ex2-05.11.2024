function calcularLitros() {
    // Obtendo os valores inseridos pelo usuário
    var precoLitro = parseFloat(document.getElementById('precoLitro').value);
    var valorPagamento = parseFloat(document.getElementById('valorPagamento').value);

    // Verificando se os valores são válidos
    if (isNaN(precoLitro) || isNaN(valorPagamento) || precoLitro <= 0 || valorPagamento <= 0) {
        document.getElementById('resultado').innerHTML = "Por favor, insira valores válidos.";
        return;
    }

    // Calculando a quantidade de litros
    var litros = valorPagamento / precoLitro;

    // Exibindo o resultado
    document.getElementById('resultado').innerHTML = "Você conseguiu colocar " + litros.toFixed(2) + " litros de gasolina.";
}