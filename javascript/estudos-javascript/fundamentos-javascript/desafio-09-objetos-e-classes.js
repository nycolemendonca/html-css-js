/*
    Crie uma classe para representar carros.
    Os carros possuem marca, cor e gasto médio de combustível por km rodado. 
    Crie um método que dado a quantidade de km e o preço do combustível, forneça o valor gasto em reais para realizar um percurso.
*/

class Carro {
    nome;
    marca;
    cor;
    gastoMedioCombustivelKm;

    constructor(nome, marca, cor, gastoMedioCombustivelKm) {
        this.nome = nome;
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioCombustivelKm = gastoMedioCombustivelKm;
    }

    descrever() {
        console.log(`O nome do carro é ${this.nome}, sua marca é ${this.marca}, sua cor é ${this.cor} e seu gasto médio de combustível por quilômetro é ${this.gastoMedioCombustivelKm} litros.`);
    }

    calculoGastoPercurso(distanciaKm, precoCombustivel) {
        let gasto = (distanciaKm * this.gastoMedioCombustivelKm * precoCombustivel).toFixed(2);
        return console.log(`Uma viagem de ${distanciaKm} km com o carro ${this.nome} custa o valor de ${gasto} reais.`);
    }
}

const carro01 = new Carro("Siena", "Fiat", "Prata", 1/12);
const carro02 = new Carro("Voyage", "Volksvagem", "Vermelho", 1/10);

carro01.calculoGastoPercurso(70, 5);
carro02.calculoGastoPercurso(70, 5);