// Escreva um programa que receba uma lista de números inteiros e retorne uma nova lista com todos os números pares

function retornaPares(lista) {
    let numerosPares = [];

    for (i = 0; i < lista.length; i++) {
        if (lista[i] % 2 === 0) numerosPares.push(lista[i])
    }

    return numerosPares;
}

console.log(retornaPares([1, 2, 3, 4, 5]));
