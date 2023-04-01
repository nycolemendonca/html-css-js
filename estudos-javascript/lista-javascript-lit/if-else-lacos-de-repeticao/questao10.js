// Escreva um programa que leia uma lista de números inteiros e retorne uma nova lista com somente os números primos usando o loop for

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPrimos = [];

// Itera sobre cada número da lista
for (i = 0; i < lista.length; i++) {
    let ehPrimo = true;

    // Se o inteiro for divisível por qualquer número entre 2 e o próprio número, ele não é primo.
    for (let j = 2; j < lista[i]; j++) {
        if (lista[i] % j === 0) {
            ehPrimo = false;
            break;
        }
    }

    if (ehPrimo && lista[i] > 1) numerosPrimos.push(lista[i]);
}

console.log(numerosPrimos);