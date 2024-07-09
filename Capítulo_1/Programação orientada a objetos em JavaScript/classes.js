// Em POO (Programação Orientada a Objetos), um objeto é uma instância
// de uma classe. Uma classe define as características do objeto.

// Aqui há um modo como podemos declarar uma classe (construtor) que representa um livro:
function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}

// Para instanciar essa classe, podemos usar o código a seguir:
var book = new Book("title", "pag", "isbn");

// Então, podemos acessar as suas propriedades e atualizá-las deste modo:
console.log(book.title); // exibe o título do livro
book.title = "new title"; // atualiza o valor do título do livro
console.log(book.title); // exibe o valor atualizado

// Podemos declarar e usar uma função/método conforme mostra o código a seguir:
Book.prototype.printTitle = function () {
    console.log(this.title);
};

book.printTitle();

// Também podemos declarar funções diretamente na definição da classe:
function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    this.printIsbn = function () {
        console.log(this.isbn);
    };
}

book.printIsbn();

// No exemplo com prototype, a função printTitle será compartilhada entre todas as instâncias, e somente uma cópia será criada.
