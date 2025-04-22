// Programa para calcular a média de 5 notas usando loop for
alert("Calculadora de Média de 5 Notas");

let soma = 0;
let notasValidas = 0;

// Usando loop for para solicitar as 5 notas
for (let i = 1; notasValidas < 5; i++) {
    const nota = parseFloat(prompt(`Digite a ${i}ª nota:`));
    
    // Verificar se a nota é válida
    if (isNaN(nota)) {
        soma += nota;
        notasValidas++;
    } else {
        alert("Valor inválido. Por favor, digite um número.");
    }
}

// Calcular a média
const media = soma / 5;

// Exibir o resultado
alert(`A média das 5 notas é: ${media.toFixed(2)}`);