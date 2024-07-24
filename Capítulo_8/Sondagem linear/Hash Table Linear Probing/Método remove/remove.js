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

    // Método remove
    remove(key) {
        const position = this.hashCode(key);
        if (this.table[position] != null) {
            if (this.table[position].key === key) {
                delete this.table[position];
                this.verifyRemoveSideEffect(key, position);
                return true;
            }
            let index = position + 1;
            while (this.table[index] != null && this.table[index].key !== key) {
                index++;
            }
            if (this.table[index] != null && this.table[index].key === key) {
                delete this.table[index];
                this.verifyRemoveSideEffect(key, index);
                return true;
            }
        }
        return false;
    }
}