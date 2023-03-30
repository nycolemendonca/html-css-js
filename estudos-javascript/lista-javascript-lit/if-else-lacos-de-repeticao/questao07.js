// Escreva um programa que leia uma lista de strings e retorne somente as strings que possuem um determinado número de caracteres usando um loop for

const str = ['banana', 'maçã', 'laranja', 'uva', 'abacaxi', 'manga', 'melancia', 'morango'];

const numeroCaracteres = 6;
const stringNumeroLimitadoCaracteres = [];

for (let i = 0; i < str.length; i++) {
    if (str[i].length === numeroCaracteres) stringNumeroLimitadoCaracteres.push(str[i])
}

console.log(stringNumeroLimitadoCaracteres);