import { defaultToString, ValuePair } from "../../util/util";

class HashTable {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    // put(key,value): esse método adiciona um novo item à tabela hash (ou pode atualizá-la também).
    put(key, value) {
        if (key != null && value != null) {
            const position = this.hashCode(key);
            this.table[position] = new ValuePair(key, value);
            return true;
        }
        return false;
    }
}