// isEmpty(): esse método devolve true se a fila não contiver nenhum elemento, e false se o tamanho for maior que 0.

// size(): esse método devolve o número de elementos contidos na fila. É semelhante à propriedade length do array.
class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    isEmpty() {
        return this.count - this.lowestCount === 0; // Para calcular quantos elementos há na fila, basta calcular a diferença entre as chaves count e lowestCount.
    }

    // Assim, para implementar o método size, basta devolver esta diferença:
    size() {
        return this.count - this.lowestCount;
    }
    // Também podemos escrever método isEmpty assim:
    isEmpty() {
        return this.size() === 0;
    }
}
