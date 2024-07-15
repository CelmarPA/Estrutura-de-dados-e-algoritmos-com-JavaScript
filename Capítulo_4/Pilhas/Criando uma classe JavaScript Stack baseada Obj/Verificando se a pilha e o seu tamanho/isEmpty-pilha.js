// A propriedade count também funciona como o tamanho da pilha. Assim, para o método size, podemos simplesmente devolver a propriedade count:
class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }
    size() {
        return this.count;
    }

    isEmpty() {
        return this.count === 0;
    }
}
