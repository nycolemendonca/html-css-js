/* Escreva um programa que receba uma lista de números inteiros e retorne
uma nova lista com os elementos em ordem decrescente */

let lista = [1, 78, 4, 6, 8];

let numerosOrdenadosDecrescent = numbers.sort(function(a, b) {
    return b - a;
});

console.log(numerosOrdenadosDecrescent);
