// size(): devolve quantos elementos estão contidos no conjunto. É semelhante à propriedade length de um array.
class Set {
    constructor() {
        this.items = {};
    }

    // Método size
    size() {
        return Object.keys(this.items).length;
    }

    // Outra forma:
    sizeLegacy() {
        let count = 0;
        for (let key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                count++
            }
        }
        return count;
    }
}