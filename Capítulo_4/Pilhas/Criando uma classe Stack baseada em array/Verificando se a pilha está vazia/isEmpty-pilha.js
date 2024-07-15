
// O próximo método que criaremos é isEmpty, que devolverá true se a pilha estiver vazia (nenhum elemento foi adicionado), e false caso contrário:
class Stack {
    constructor() {
        this.items = [];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
}
