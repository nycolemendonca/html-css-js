/* Escreva um programa que leia uma lista de números inteiros e retorne a soma dos números que estão em índices pares usando um loop for */

function somaNumerosIndicesPares(numeros) {
    let soma = 0;

    for (let i = 0; i < numeros.length; i += 2) soma += numeros[i];

    return soma;
}

console.log(somaNumerosIndicesPares([1, 2, 3, 4, 5])); // retorna 9