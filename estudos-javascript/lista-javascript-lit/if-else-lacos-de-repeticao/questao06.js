// Escreva um programa que leia uma lista de números inteiros e retorne uma nova lista com somente os números pares usando um loop for

function retornaNumerosPares(numeros) {
    let numerosPares = [];

    for (i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) numerosPares.push(numeros[i]);
    }

    return numerosPares;
}

console.log(retornaNumerosPares([1, 2, 3, 4, 5]));