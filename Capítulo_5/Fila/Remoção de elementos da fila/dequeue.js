// dequeue(): esse método remove o primeiro elemento da fila (o item que está na frente). Também devolve o elemento removido.

class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.lowestCount]; // Armazenaremos o valor da frente da fila
        delete this.items[this.lowestCount]; // Remove o elemento da frente da fila
        this.lowestCount++; // Incrementar a propriedade lowestCount de 1
        return result; // Retorna o elemento removido
    }
}
