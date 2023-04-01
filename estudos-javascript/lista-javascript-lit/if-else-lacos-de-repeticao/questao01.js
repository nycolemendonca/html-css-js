/* Escreva um programa que verifique se uma palavra é um palíndromo usando um loop while.
    - Palíndromo: Sequência de caracteres que pode ser lido da esquerda para a direita e vice-versa, como o mesmo resultado.
*/

function checarPalindromo(palavra) {
    let i = 0; // contador
    let j = palavra.length - 1;

    // O loop compara os caracteres nas posições 'i' e 'j'. Se eles não forem iguais, a palavra não é um palíndromo.
    while (i < j) {
        if (palavra[i] !== palavra[j]) return false;
        i++; // Itera a palavra a partir do início
        j--; // Itera a palavra a partir do fim
    }

    return true;
}

console.log(checarPalindromo('racecar'));