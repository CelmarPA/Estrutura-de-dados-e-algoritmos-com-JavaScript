import { defaultToString, ValuePair } from "../../util/util";

class HashTable {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }
}