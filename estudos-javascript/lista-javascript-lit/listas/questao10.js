// Escreva um programa que receba ums lista de números inteiros e retorne uma nova lista com todos os números ímpares

function retornaImpares(lista) {
    let numerosImpares = [];

    for (i = 0; i < lista.length; i++) {
        if (lista[i] % 2 !== 0) numerosImpares.push(lista[i])
    }

    return numerosImpares;
}

console.log(retornaImpares([1, 2, 3, 4, 5]));
