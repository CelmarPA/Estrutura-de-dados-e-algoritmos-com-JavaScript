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

    // Método verifyRemoveSideEffect
    verifyRemoveSideEffect(key, removedPosition) {
        const hash = this.hashCode(key);
        let index = removedPosition + 1
        while (this.table[index] != null) {
            const posHash = this.hashCode(this.table[index].key);
            if (posHash <= hash || posHash <= removedPosition) {
                this.table[removedPosition] = this.table[index];
                delete this.table[index];
                removedPosition = index;
            }
            index++;
        }
    }
}