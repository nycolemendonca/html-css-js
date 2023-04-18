// Escreva um programa que receba uma lista de strings e retorne uma nova lista com todas as strings que começam com um determinado caractere

const str = ['banana', 'maçã', 'mamão', 'manga', 'kiwi', 'acerola'];

const filtro = 'm';

const palavrasSelecionadas = [];

for (let i = 0; i < str.length; i++) {
    if (str[i].charAt(0) === filtro) palavrasSelecionadas.push(str[i]);
}

console.log(palavrasSelecionadas);
