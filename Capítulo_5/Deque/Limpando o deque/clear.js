// Para limpar todos os elementos do deque, podemos chamar o método removeFront até que ele devolva undefined, ou podemos simplesmente reiniciar o valor das propriedades da classe Deque com os mesmos valores declarados em seu construtor:
class Deque {
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
