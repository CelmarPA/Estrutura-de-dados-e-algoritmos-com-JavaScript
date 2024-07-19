// values(): devolve um array com todos os valores (elementos) que estão no conjunto.
class Set {
    constructor() {
        this.items = {};
    }

    // Método values
    value() {
        return Object.values(this.items);
    }

    // Outro modo
    valuesLegacy(){
        let values = [];
        for (let key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                values.push(self.items[key]);
            }
        }   
        return values;
    }
}