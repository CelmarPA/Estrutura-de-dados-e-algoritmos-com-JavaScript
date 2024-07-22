import { defaultToString } from "../util/util";

class HashTable {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    loseloseHashCode(key) {
        if (typeof key === "number") {
            return key;
        }
        const tableKey = this.toStrFn(key);
        let hash = 0;
        for (let i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i);
        }
        return hash % 37;
        // Para trabalhar com números menores, devemos usar o resto da divisão (%) do número de hash utilizando um número arbitrário – isso evitará correr o risco de trabalhar com números grandes, que não caibam em uma variável numérica.
    }

    hashCode(key) {
        return this.loseloseHashCode(key);
    }
}