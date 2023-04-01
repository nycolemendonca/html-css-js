// Escreva um programa que leia uma lista de strings e retorne a string mais longa usando um loop for

const str = ['banana', 'maçã', 'laranja', 'uva', 'abacaxi', 'manga', 'melancia', 'morango'];
let maior = '';

// A cada iteração, a função length é usada para determinar o comprimento da string atual na lista e compará-la com a string mais longa. Se a string atual for mais longa que a string mais longa, a variável maior é atualizada com a string atual
for (let i = 0; i < str.length; i++) {
    if (str[i].length > maior.length) maior = str[i];
}

console.log(maior);