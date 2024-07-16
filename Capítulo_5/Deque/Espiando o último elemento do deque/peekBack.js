// peekBack(): esse método devolve o último elemento do deque.
class Deque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    peekBack() {
        if (this.isEmpty) {
            return undefined;
        }
        return this.items[this.count - 1];
    }
}
