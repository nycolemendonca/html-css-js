// Escreva um programa que leia uma lista de números inteiros e retorne uma nova lista somente com os números ímpares usando um looping for.

function retornarNumerosImpares(numeros) {
    let numerosImpares = [];

    for (i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 !== 0) numerosImpares.push(numeros[i]);
    }

    return numerosImpares;
}

console.log(retornarNumerosImpares([1, 2, 3, 4, 5]));