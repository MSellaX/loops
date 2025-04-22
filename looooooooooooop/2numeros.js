// Solicita os dois números ao usuário
let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));

if (isNaN(num1) || isNaN(num2)) {
    alert("ERRO: digite valores válidos")
}

// Ajusta o primeiro número para ser o menor caso num1 seja maior que num2
if (num1 > num2) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
}

// Loop para percorrer o intervalo entre num1 e num2
for (let i = num1; i <= num2; i++) {
    if (i % 2 === 0) {
        alert(i);
    }
}
