let soma = 0;

for (let i = 1; i <= 10; i++) {
    let input = prompt(`Digite o ${i}º número inteiro:`);
    let numero = parseInt(input);

    // Verifica apenas se é NaN (não válido)
    if (isNaN(numero)) {
        alert("Valor inválido! Digite um número.");
        i = 0;  // Reinicia o loop (volta para i = 1 na próxima iteração)
        soma = 0;  // Zera a soma
    } else {
        soma += numero;  // Soma apenas se for válido
    }
}

alert(`A soma dos números é: ${soma}`);