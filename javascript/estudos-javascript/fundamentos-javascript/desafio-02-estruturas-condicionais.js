/*
    Faça um programa para calcular o valor gasto de uma viagem. Você terá três variáveis. Sendo elas:

    - Preço do etanol;
    - Preço da gasolina;
    - Gasto médio de combustível do carro por km;
    - Distância em km da viagem;
    - O tipo de combustível usado no carro;

    Imprima no console o valor gasto de combustível para realizar esta viagem.
*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitro = 10;
const tipoCombustivel = "gasolina";
const distaciaKm = 100;

const litrosConsumidos = distaciaKm / kmPorLitro;

if (tipoCombustivel === 'etanol') {
    const valorGastoEtanol = (litrosConsumidos * precoEtanol).toFixed(2);
    console.log(`Valor gasto em Etanol: ${valorGastoEtanol} reais`);

} else if (tipoCombustivel === 'gasolina') {
    const valorGastoGasolina = (litrosConsumidos * precoGasolina).toFixed(2);
    console.log(`Valor gasto em Gasolina: ${valorGastoGasolina} reais`);

} else {
    console.log("Tipo de combustível inválido.");
}