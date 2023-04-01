// Escreva um programa que leia uma lista de strings e retorne somente as strings que começam com uma determinada letra usando o loop for.

const str = ['banana', 'maçã', 'laranja', 'uva', 'abacaxi', 'manga', 'melancia', 'morango'];

const letraFiltro = 'm';

const palavrasFiltradas = [];

for (let i = 0; i < str.length; i++) {
    // charAt -> Verifica se o índice 0 (primeira letra) corresponde a letra determinada no filtro
    if (str[i].charAt(0) === letraFiltro) palavrasFiltradas.push(str[i]);
}

console.log(palavrasFiltradas);
