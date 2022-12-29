/*
    Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    1 - À vista no débito, recebe 10% de desconto;
    2 - À vista no dinheiro ou PIX, recebe 15% de desconto;
    3 - Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%.
*/

let preco = 100;
let formaDePagamento = 4;

const desconto10 = preco - (preco * 0.10);
const desconto15 = preco - (preco * 0.15);
const juros10 = preco + (preco * 0.10);


if (formaDePagamento === 1) console.log(desconto10);
else if (formaDePagamento === 2) console.log(desconto15);
else if (formaDePagamento === 3) console.log(preco);
else if (formaDePagamento === 4) console.log(juros10);