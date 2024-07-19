// has(element): devolve true se element estiver no conjunto, e false caso contrário.
class Set {
    constructor() {
        this.items = {};
    }

    // Método has
    has(element) {
        return element in this.items;
    }

    // Melhor maneira de implementar
    has(element) {
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }
}
