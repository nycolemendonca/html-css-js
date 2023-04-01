// Escreva um programa que leia uma lista de números inteiros e retorne uma nova lista com os elementos duplicados removidos usando um loop for

function removerElementosDuplicados(lista) {
    const numerosUnicos = [];

    // A iteração verifica se o número atual 'lista[i]' já está na lista numerosUnicos usando o método includes(). Se o número não estiver na lista, o programa o adiciona usando o método push().
    for (let i = 0; i < lista.length; i++) {
        if (!numerosUnicos.includes(lista[i])) numerosUnicos.push(lista[i]);
    }

        return numerosUnicos;
}

console.log(removerElementosDuplicados([1, 2, 3, 2, 4, 3]));