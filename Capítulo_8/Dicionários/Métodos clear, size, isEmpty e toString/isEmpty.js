import { defaultToString } from "../../ultil/util.js";
export default class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    // isEmpty(): esse método devolve true se size for igual a zero, e false caso contrário.
    isEmpty() {
        return this.size() === 0;
    }
}