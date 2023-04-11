/* Escreva um programa que receba uma lista de números inteiros e retorne uma 
nova lista com todos os elementos duplicados removidos */

function removeElementosDuplicados(lista) {
  const numerosUnicos = [];
  
  for (let i = 0; i < lista.length; i++) {
    if (!numerosUnicos.includes(lista[i])) numerosUnicos.push(lista[i]);
  }

  return numerosUnicos;
}

console.log(removeElementosDuplicados([1, 3, 3, 2, 5, 9, 4, 5, 13, 2, 13]));
