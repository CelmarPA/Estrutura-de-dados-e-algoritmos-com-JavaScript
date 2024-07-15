// teremos de implementar manualmente a lógica para remover um elemento. O método pop também devolve o elemento que foi removido da pilha. Esse método é implementado assim:
class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }
}
