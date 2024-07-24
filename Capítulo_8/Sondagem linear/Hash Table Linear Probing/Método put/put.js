import { defaultToString, ValuePair } from "../../../util/util";

// Classe HashTableLinearProbing
class HashTableLinearProbing {
    constructor(toStrFn =  defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    // Método loseloseHashCode
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
    }

    // Método hashCode
    hashCode(key) {
        return this.loseloseHashCode(key);
    }

    // Método put
    put(key, value) {
        if (key != null && value != null) {
            const position = this.hashCode(key);
            if (this.table[position == null]) {
                this.table[position] = new ValuePair(key, value);
            } else {
                let index = position + 1;
                while (this.table[index] != null) {
                    index++;
                }
                this.table[index] = new ValuePair(key, value);
            }
            return true;
        }
        return false;
    }
}