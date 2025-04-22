// Inicializa a variável soma com o valor 0. Ela será usada para acumular a soma dos números.
let soma = 0;

// Inicia um laço de repetição que vai de 1 até 10 (inclusive), para solicitar 10 números ao usuário.
for (let i = 1; i <= 10; i++) {
    // Exibe uma mensagem pedindo para o usuário digitar o número i, usando o prompt.
    // O parseInt converte a entrada do usuário (que é uma string) para um número inteiro.
    const numero = parseInt(prompt(`Digite o ${i}º número inteiro:`));
    
    // Adiciona o número informado pelo usuário à variável soma.
    soma += numero;
}

// Exibe o resultado final da soma dos números após o laço ser executado, usando o alert.
alert(`A soma dos números é: ${soma}`);
