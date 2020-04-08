/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myVar = [10, 'Pudim', {a:1, b:2 }, ['gol', 'volkswagen'], undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArray(arr) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(returnArray(myVar)[1]); // 'Pudim' 

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function returnArrayValueByIndex(array, index) {
  return array[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myVar2 = [50, 'Televisão', {proteina: 'Frango', carboidrato: 'Batata'}, null, [1, 2]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
returnArrayValueByIndex(myVar2, 0); // 50
returnArrayValueByIndex(myVar2, 1); // 'Televisão'
returnArrayValueByIndex(myVar2, 2); // {proteina: 'Frango', carboidrato: 'Batata'}
returnArrayValueByIndex(myVar2, 3); // null
returnArrayValueByIndex(myVar2, 4); // [1,2]

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName) {
  var books = {
    'Introdução ao HTML5': {
      amountOfPages: 348,
      author: 'Chico Butico',
      publishingCompany: 'Butico Books'
    },
    'Smashing CSS': {
      amountOfPages: 754,
      author: 'Samanta Raio Laser',
      publishingCompany: 'Laser Romances'
    },
    'Segredos do Ninja Javascript': {
      amountOfPages: 525,
      author: 'Clibíris Costa',
      publishingCompany: 'Clibíris Books'
    }
  };
  return bookName ? books[bookName] : books;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();
/*
  book1: {
      amountOfPages: 348,
      author: 'Chico Butico',
      publishingCompany: 'Butico Books'
    },
    book2: {
      amountOfPages: 754,
      author: 'Samanta Raio Laser',
      publishingCompany: 'Laser Romances'
    },
    book3: {
      amountOfPages: 525,
      author: 'Clibíris Costa',
      publishingCompany: 'Clibíris Books'
    }
*/

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'Segredos do Ninja Javascript';
console.log(`O livro ${bookName} tem ${book(bookName).amountOfPages} páginas!`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
bookName = 'Introdução ao HTML5';
console.log(`O autor do livro ${bookName} é ${book(bookName).author}.`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
bookName = 'Smashing CSS';
console.log(`O livro ${bookName} foi publicado pela editora ${book(bookName).publishingCompany}.`);
