class Set {
    constructor() {
        this.items = {};
    }

    // add(element): adiciona um novo element ao conjunto.
    add(element) {
        if (!this.has(element)) {
            this.items[element] = element;
            return true;
        }
        return false;
    }
}
