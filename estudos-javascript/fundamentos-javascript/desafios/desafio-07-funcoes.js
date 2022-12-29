/*
    Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    1 - À vista no débito, recebe 10% de desconto;
    2 - À vista no dinheiro ou PIX, recebe 15% de desconto;
    3 - Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%.
*/

function calculaDesconto(precoEtiqueta, taxaDesconto) {
    return precoEtiqueta - (precoEtiqueta * (taxaDesconto/100));
}

function calculaJuros(precoEtiqueta, taxaJuros) {
    return precoEtiqueta + (precoEtiqueta * (taxaJuros/100));
}

let precoEtiqueta = 1000;
let formaDePagamento = 3;

if (formaDePagamento === 1) console.log(calculaDesconto(precoEtiqueta, 10));
    else if (formaDePagamento === 2) console.log(calculaDesconto(precoEtiqueta, 15));
    else if (formaDePagamento === 3) console.log(precoEtiqueta);
    else if (formaDePagamento === 4) console.log(calculaJuros(precoEtiqueta, 10));
