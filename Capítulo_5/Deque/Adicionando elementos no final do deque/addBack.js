// addBack(element): esse método adiciona um novo elemento no fim do deque.
class Deque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    addBack(element) {
        this.items[this.count] = element;
        this.count++;
    }
}
