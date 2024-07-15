// Para acessar o elemento armazenado no topo da pilha, é necessário decrementar a propriedade count de 1. Vamos então ver o código do método peek:
class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }
    // Para limpar a pilha, basta reiniciá-la:
    clear() {
        this.item = {};
        this.count = 0;
    }

}

// Também poderíamos usar a lógica a seguir para remover todos os elementos da pilha, respeitando o comportamento de LIFO:
while (!this.isEmpty()) {
    this.pop();
}