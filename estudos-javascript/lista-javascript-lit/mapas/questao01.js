// Escreva um programa que leia dois dicionários de produtos com seus respectivos preços e retorne somente os produtos que estão presentes em ambos os dicionários

const produtos1 = {
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

const produtos2 = {
    'Arroz': 14.99,
    'Feijão': 7.99,
    'Cerveja': 3.99,
    'Leite': 3.50,
    'Queijo': 8.99,
    'Pão de Forma': 4.50,
    'Manteiga': 5.75,
    'Presunto': 5.75,
    'Queijo Ralado': 5.75
};

function produtosEmComum(produtos1, produtos2) {
    const produtosComuns = {};

    for (let produto in produtos1) {
        if (produtos2.hasOwnProperty(produto)) produtosComuns[produto] = produtos1[produto];
    }

    return produtosComuns;
}

console.log(produtosEmComum(produtos1, produtos2));
