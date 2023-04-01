// Escreva um programa que leia uma lista de strings e retorne somente as strings que contêm uma determinada palavra usando o loop for.

const str = ['banana', 'maçã', 'laranja', 'uva', 'abacaxi', 'manga', 'melancia', 'morango'];

const silaba = 'ma';

const palavrasFiltradas = [];

for (let i = 0; i < str.length; i++) {9
    if (str[i].includes(silaba)) palavrasFiltradas.push(str[i]);
}

console.log(palavrasFiltradas);