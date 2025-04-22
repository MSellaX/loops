let soma = 0;

for (let i = 1; i <= 10; i++) {
    const numero = parseInt(prompt(`Digite o ${i}º número inteiro:`));
    soma += numero;
}
alert(`A soma dos números é: ${soma}`); 