// peek(): esse método devolve o primeiro elemento da fila – é o primeiro item adicionado e o primeiro que será removido da fila.
class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }
}
