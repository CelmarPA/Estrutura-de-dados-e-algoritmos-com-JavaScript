// delete(element): remove element do conjunto.
class Set {
    constructor() {
        this.items = {};
    }

    // Método delete
    delete(element) {
        if (this.has(element)) {
            delete this.items[element];
            return true;
        }
        return false;
    }
}