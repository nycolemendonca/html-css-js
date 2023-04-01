// Escreva um programa que leia uma lista de números inteiros e retorne o segundo maior número usando um loop for

const lista = [10, 3, 56, 48, 7, 25];

let maior = lista[0];
let segundoMaior = lista[0];

for (let i = 0; i < lista.length; i++) {

    // Verifica se o número atual é maior que o maior número atual
    if (lista[i] > maior) {
        segundoMaior = maior;
        maior = lista[i];
    } else if (lista[i] > segundoMaior && lista[i] !== maior) {

        // Verifica se o número atual é maior que o segundo maior número atual 
        segundoMaior = lista[i];
    }
}

console.log(segundoMaior);