/* Escreva um programa que leia uma lista de números inteiros e retorne a soma dos números que estão em índices ímpares usando um loop for. */

function somaNumerosIndicesImpares(numeros) {
    let soma = 0;

    for (let i = 1; i < numeros.length; i += 2) soma += numeros[i];

    return soma;
}

console.log(somaNumerosIndicesImpares([1, 2, 3, 4, 5]));