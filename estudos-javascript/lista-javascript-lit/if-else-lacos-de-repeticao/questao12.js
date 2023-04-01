// Escreva um programa que leia uma lista de números inteiros e retorne o terceiro menor número usando um loop for.

const lista = [10, 3, 56, 48, 7, 25]; 

// Percorre a lista de números inteiros
for (let i = 0; i < lista.length; i++) {

    // Compara cada elemento da lista com todos os elementos à sua direita
    for (let j = i + 1; j < lista.length; j++) {

        // Se o elemento atual for maior que o próximo elemento, os dois elementos são trocados de posição. Isso garante que a lista esteja em ordem crescente
        if (lista[i] > lista[j]) {
            let temp = lista[i];
            lista[i] = lista[j];
            lista[j] = temp;
        }
    }
}

console.log("O terceiro menor número é: " + lista[2]); // retorna o terceiro menor número
