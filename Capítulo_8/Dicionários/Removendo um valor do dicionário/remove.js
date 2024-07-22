import { defaultToString } from "../../ultil/util.js";
export default class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    // remove(key): esse método remove value do dicionário usando key como o parâmetro de busca.
    remove(key) {
        if (this.haskey(key)) {
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }
}
