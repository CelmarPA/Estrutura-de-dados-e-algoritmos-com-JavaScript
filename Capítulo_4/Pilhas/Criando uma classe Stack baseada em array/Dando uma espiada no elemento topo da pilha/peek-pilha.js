// Se quisermos saber qual foi o último elemento adicionado em nossa pilha, podemos usar o método peek. Esse método devolverá o item que está no topo da pilha:
class Stack {
    constructor() {
        this.items = [];
    }
    peek() {
        return this.items[this.items.length - 1];
    }
}

// Como estamos usando internamente um array para armazenar os itens, o último item de um array pode ser obtido usando length – 1, como mostra o código que acabamos de ver.