/* Comparar a idade de duas pessoas. */

class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade, anoDeNascimento) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
    }
}

function compararPessoas(pessoa01, pessoa02) {

    if (pessoa01.idade > pessoa02.idade) {
        console.log(`${pessoa01.nome} tem mais idade que ${pessoa02.nome}`);

    } else if (pessoa01.idade < pessoa02.idade) {
        console.log(`${pessoa02.nome} tem mais idade que ${pessoa01.nome}`);

    } else {
        console.log(`${pessoa01.nome} tem a mesma idade que ${pessoa02.nome}`);
    }
}

const margot = new Pessoa("Margot", 06);
const nycole = new Pessoa("Nycole", 22);

compararPessoas(nycole, margot);