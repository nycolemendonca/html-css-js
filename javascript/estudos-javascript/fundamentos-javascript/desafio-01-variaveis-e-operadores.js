/*
    Faça um programa para calcular o valor gasto de uma viagem. Você terá três variáveis. Sendo elas:

    - Preço do combustível;
    - Gasto médio de combustível do carro por km;
    - Distância em km da viagem.

    Imprima no console o valor gasto de combustível para realizar esta viagem.
*/ 

const precoCombustivel = 5.79;
let kmPorLitro = 12;
let distaciaKmViagem = 1580;

let litrosConsumidos = distaciaKmViagem / kmPorLitro;
let valorGastoCombustivel = (precoCombustivel * litrosConsumidos).toFixed(2);

console.log(`Valor gasto em combustível: ${valorGastoCombustivel} reais`);