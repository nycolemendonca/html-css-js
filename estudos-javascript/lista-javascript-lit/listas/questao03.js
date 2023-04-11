/* Escreva um programa que receba uma lista de números inteiros e retorne o menor
elemento da lista */

function retornaMenorElemento(lista) {
  let menorElemento = 0;

  for (i = 0; i < lista.length; i++) {
    if (lista[i] < menorElemento) menorElemento = lista[i];
  }

  return menorElemento;
}

console.log(retornaMenorElemento([-9, 8, 7, -58]));
