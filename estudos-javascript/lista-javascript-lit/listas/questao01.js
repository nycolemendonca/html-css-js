/* Escreva um programa que receba uma lista de números inteiros e retorne a soma dos elementos da lista */

function somaLista(lista) {
    let soma = 0;

    for (let i = 0; i < lista.length; i++) soma += lista[i];

    return soma;
}

console.log(somaLista([1, 2, 3, 4, 5]));
