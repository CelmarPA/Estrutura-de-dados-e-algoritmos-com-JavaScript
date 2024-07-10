// Com a ES2015, podemos simplificar a sintaxe e usar o código a seguir:
class Book {
    constructor(title, pages, isbn) {
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }
    printIsbn() {
        console.log(this.isbn);
    }
}

let book = new Book("title", "pages", "isbn");
console.log(book.title); // exibe o título do livro
book.title = "new title"; // atualiza o valor do título do livro
console.log(book.title); // exibe o título do livro atualizado