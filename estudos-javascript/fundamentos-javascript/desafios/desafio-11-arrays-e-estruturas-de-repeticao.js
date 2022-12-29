/*
    Crie um programa que dado um número, imprima sua tabuada.
*/

function tabuada(numero) {
    for (let i = 0; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`); 
    }
}

tabuada(5);