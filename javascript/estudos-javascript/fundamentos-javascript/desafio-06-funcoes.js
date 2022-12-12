/* 
    O IMC é um critério da OMS para dar uma indicação sobre a condição de peso de uma pessoa adulta.

    Fórmula do IMC: peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto, mostre sua condição de acordo com os dados abaixo.

    - Abaixo de 18.5: Abaixo do peso;
    - Entre 18.5 e 25: Peso normal;
    - Entre 25 e 30: Acima do peso;
    - Entre 30 e 40: Obeso;
    - Acima de 40: Obesidade grave.
*/

function calcularImc(peso, altura) {
    return (peso / (altura * altura));
}

function classificarImc(imc) {
    if (imc < 18.5) return "Abaixo do peso.";
    else if ((imc >= 18.5) && (imc <= 25)) return "Peso normal.";
    else if ((imc > 25) && (imc <= 30)) return "Acima do peso.";
    else if ((imc > 30) && (imc <= 40)) "Obeso."
    else return "Obesidade grave."
} 

// escopo isolado do restante do código
(function main() {
    const peso = 68;
    const altura = 1.74;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})(); // a função está invocando ela mesma = função anônima