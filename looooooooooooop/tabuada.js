// Solicita um número ao usuário
const numero = parseInt(prompt("Digite um número para ver sua tabuada:"));

// Verifica se o valor digitado é um número válido
if (isNaN(numero)) {
    alert("Por favor, digite um número válido.");
} else {
    let tabuada = `Tabuada do ${numero}:\n\n`;
    
    // Constrói a tabuada de 1 a 10
    for (let i = 1; i <= 10; i++) {
        tabuada += `${numero} x ${i} = ${numero * i}\n`;
    }
    
    // Exibe a tabuada completa em um único alerta
    alert(tabuada);
}