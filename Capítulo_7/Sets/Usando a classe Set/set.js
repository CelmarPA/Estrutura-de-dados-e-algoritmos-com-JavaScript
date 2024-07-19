export class Set {
    #items;
    constructor() {
        this.#items = {};
    }

    // Metodo getter para #items
    _getItems() {
        return this.#items;
    }

    // Método setter para #items
    _setItems(item){
        this.#items[item] = item;
    }

    // Método has(element): devolve true se element estiver no conjunto, e false caso contrário.
    has(element) {
        return Object.prototype.hasOwnProperty.call(this._getItems(), element);
    }

    // add(element): adiciona um novo element ao conjunto.
    add(element) {
        if (!this.has(element)) {
            this._setItems(element);
            return true;
        }
        return false;
    }

    // Método delete(element): remove element do conjunto.
    delete(element) {
        if (this.has(element)) {
            delete this._getItems()[element];
            return true;
        }
        return false;
    }

    // Método clear(): remove todos os elementos do conjunto.
    clear() {
        this.#items = {};
    }

    // Método size(): devolve quantos elementos estão contidos no conjunto. É semelhante à propriedade length de um array.
    size() {
        let count = 0;
        for (let key in this._getItems()) {
            if (this._getItems().hasOwnProperty(key)) {
                count++;
            }
        }
        return count;
    }

    // Método values(): devolve um array com todos os valores (elementos) que estão no conjunto.
    values() {
        let values = [];
        for (let key in this._getItems()) {
            if (this._getItems().hasOwnProperty(key)) {
                values.push(this._getItems()[key]);
            }
        }
        return values;
    }
}

// const set = new Set();
// set.add(1);
// console.log(set.values()); // [1]
// console.log(set.has(1)); // true
// console.log(set.size()); // 1
// set.add(2);
// console.log(set.values()); // [1, 2]
// console.log(set.has(2)); // true
// console.log(set.size()); // 2
// set.delete(1);
// console.log(set.values()); // [2]
// set.delete(2);
// console.log(set.values()); // exibe []
