/* Escreva um programa que receba uma lista de números inteiros e retorne uma
nova lista com os elementos em ordem crescente */

let numeros = [5, 10, 2, 8, 3];
let ordenados = [];

for (let i = 0; i < numeros.length; i++) {
    let inserido = false;
    for (let j = 0; j < ordenados.length; j++) {

        // Insere o número na posição correta na lista ordenada
        if (numeros[i] < ordenados[j]) { 
            ordenados.splice(j, 0, numeros[i]);
            inserido = true;
            break;
        }
    }

    // Adiciona o número no final da lista se ele for maior que todos os elementos existentes
    if (!inserido) ordenados.push(numeros[i]);   
}

console.log("A lista ordenada é: " + ordenados);
