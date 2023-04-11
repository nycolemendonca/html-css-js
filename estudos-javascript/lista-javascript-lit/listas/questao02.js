/* Escreva um programa que receba uma lista de números inteiros e retorne o maior
elemento da lista */

function retornaMaiorElemento(lista) {
  let maiorElemento = 0;

  for (i = 0; i < lista.length; i++) {
    if (lista[i] > maiorElemento) maiorElemento = lista[i];
  }

  return maiorElemento;
}

console.log(retornaMaiorElemento([1, 5, 15, 4]));
