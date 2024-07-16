// addFront(element): esse método adiciona um novo elemento na frente do deque.
class Deque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    addFront(element) {
        if (this.isEmpty()) { // Se deque vazio
            this.addBack(element); // call addBack para adicionar
        } else if (this.lowestCount > 0) { // Se lowestCount > 0
            this.lowestCount--; // Decrementa lowestCount
            this.items[this.lowestCount] = element; // Adiciona o elemento
        } else { // Se lowestCount é igual a 0
            for (let i = this.count; i > 0; i--) { // começamos a iterar pelos valores existentes na propriedade items a partir de seu último índice
                this.items[i] = this.items[i - 1]; // atribuindo-lhe o elemento que está em index - 1.
            }
            this.count++
            this.lowestCount = 0;
            this.items[0] = element;
        }
    }
}
