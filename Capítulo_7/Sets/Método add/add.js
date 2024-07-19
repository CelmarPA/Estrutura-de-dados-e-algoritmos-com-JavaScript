// add(element): adiciona um novo element ao conjunto.
class Set {
    constructor() {
        this.items = {};
    }

    add(element) {
        if (!this.has(element)) {
            this.items[element] = element;
            return true;
        }
        return false;
    }
}
