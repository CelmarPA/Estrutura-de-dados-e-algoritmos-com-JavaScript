import { defaultToString } from "../../ultil/util.js";
export default class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    // size(): esse método devolve a quantidade de valores contida no dicionário. É semelhante à propriedade length da classe Array.
    size() {
        return Object.keys(this.table).length;
    }
}