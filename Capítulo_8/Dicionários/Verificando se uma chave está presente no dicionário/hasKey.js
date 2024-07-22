import { defaultToString } from "../../util/util.js";
export default class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    // hasKey(key): esse método devolve true se key estiver presente no dicionário, e false caso contrário.
    hasKey(key) {
        return this.table[this.toStrFn(key)] != null;
    }
}