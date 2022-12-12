/*
    Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem dizer o valor de seu IMC.
    Instancie uma pessoa chamada José que tenha 70 kg de peso e 1.75 de altura e peça ao José para dizer o valor de seu IMC.
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculoImc() {
        return (this.peso / (this.altura * this.altura)).toFixed(2);
    }

    classificarImc() {
        let imc = this.calculoImc();

        if (imc < 18.5) return "Abaixo do peso.";
        else if ((imc >= 18.5) && (imc <= 25)) return "Peso normal.";
        else if ((imc >= 25) && (imc <= 30)) return "Acima do peso.";
        else if ((imc > 30) && (imc <= 40)) return "Obeso.";
        else return "Gravemente Obeso.";

    }

}

const jose = new Pessoa("José", 70, 1.75);
const nycole = new Pessoa("Nycole", 75, 1.75);

console.log(jose.classificarImc());
console.log(nycole.classificarImc());