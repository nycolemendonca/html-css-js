// Escreva um programa que leia um dicionário de produtos com seus respectivos preços e retorne o produto mais caro

const produtos = {
    'Arroz': 15.99,
    'Feijão': 8.99,
    'Macarrão': 4.99,
    'Leite': 3.49,
    'Café': 9.99,
    'Pão de Forma': 4.50,
    'Chocolate': 2.25,
    'Bolacha': 2.25,
    'Refrigerante': 2.25 
};

let produtoMaisCaro = '';
let precoProdutoMaisCaro = 0;

for (let produto in produtos) {
    if (produtos[produto] > precoProdutoMaisCaro) {
        produtoMaisCaro = produto;
        precoProdutoMaisCaro = produtos[produto];
    }
}

console.log(`O produto mais caro é ${produtoMaisCaro} e o seu preço é R$ ${precoProdutoMaisCaro.toFixed(2)}.`);
