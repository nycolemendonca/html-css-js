/* # Buscando e contando dados em Arrays

    Baseado no Array de Livros por Categoria, faça os seguintes desafios

    - Contar o número de categorias e o número de livros em cada categoria
    - Contar o número de autores
    - Mostrar os livros so autos Augusto Cury
    - Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: 'Riqueza',
        books: [
            {
                title: 'Os segredos da mente milionária',
                author: 'T. Harv Eker',
            },
            {
                title: 'O homem mais rico da Babilônia',
                author: 'George S. Clason',
            },
            {
                title: 'Pai rico, pai pobre',
                author: 'Robert T. Kiyosaki e Sharon L. Lechter',
            },
        ],
    },
    {
        category: 'Inteligência Emocional',
        books: [
            {
                title: 'Você é Insubstituível',
                author: 'Augusto Cury',
            },
            {
                title: 'Ansiedade - Como enfrentar o mal do século',
                author: 'Augusto Cury',
            },
            {
                title: 'Os 7 hábitos das pessoas altamente eficazes',
                author: 'Stephen R. Covey',
            },
        ],
    },

];

const totalCategories = booksByCategory.length
console.log('Total de categorias: ', totalCategories)

for (let category of booksByCategory) {
    console.log('Total de livros da categoria: ', category.category)
    console.log(category.books.lenght)
}

function booksOfAuthor(author) {
    let books = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author === author) {
                books.push(book.title)
            }
        }
    }

    console.log(`Livros do ${author}: ${books}`)
}

booksOfAuthor('T. Harv Eker')
