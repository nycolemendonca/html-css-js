/*
    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    
    * receitas: []
    * despesas: []
    
    Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do salto.
*/

let familia = {
    receitas: [2500, 3200, 250.43, 360.45],
    despesas: [320.34, 128.45, 176.87, 1450.00]
}

function soma(array) {
    let total = 0;

    for (let value of array) total += value;

    return total
}

function calcularBalanco() {
    const calcularReceita = soma(familia.receitas)
    const calcularDespesa = soma(familia.despesas)

    const total = calcularReceita - calcularDespesa

    const itsOk = (total >= 0)

    let balancoFinal = 'negativo'
    
    if (itsOk) { balancoFinal = 'positivo' }
    console.log(`Seu saldo é ${balancoFinal}: ${total}`)
}

calcularBalanco()