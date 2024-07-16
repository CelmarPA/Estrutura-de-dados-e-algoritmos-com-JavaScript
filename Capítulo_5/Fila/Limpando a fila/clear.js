// Para limpar todos os elementos da fila, podemos chamar o método dequeue até que ele devolva undefined, ou podemos simplesmente reiniciar o valor das propriedades da classe Queue com os mesmos valores declarados em seu construtor:
class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }
}
