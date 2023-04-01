// Escreva um programa que leia uma lista de números inteiros e retorne a média dos números da lista ignorando os valores extremos (o menor e o maior número) usando um loop for

const lista = [10, 3, 56, 48, 7, 25];

let menor = lista[0];
let maior = lista[0];
let soma = 0;

// Encontra o menor e o maior número na lista
for (let i = 0; i < lista.length; i++) {
    if (lista[i] < menor) menor = lista[i];
    if (lista[i] > maior) maior = lista[i];
}

// Soma todos os números da lista, exceto os extremos
for (let i = 0; i < lista.length; i++) {
    if (lista[i] !== menor && lista[i] !== maior) soma += lista[i];
}

let media = soma / (lista.length - 2);
console.log('Média dos números da lista ignorando o maior e o menor valor: ' + media);