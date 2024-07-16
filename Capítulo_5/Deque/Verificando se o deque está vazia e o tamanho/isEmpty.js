// isEmpty(): esse método devolve true se o deque não contiver nenhum elemento, e false se o tamanho for maior que 0.

// size(): esse método devolve o número de elementos contidos no deque. É semelhante à propriedade length do array.
class Deque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.count - this.lowestCount;
    }
}