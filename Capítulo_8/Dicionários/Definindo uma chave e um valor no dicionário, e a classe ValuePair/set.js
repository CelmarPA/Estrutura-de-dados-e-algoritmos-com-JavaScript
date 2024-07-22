import { defaultToString } from "../../util/util.js";
import { ValuePair } from "../../util/util.js";
export default class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    // set(key, value): esse método adiciona um novo elemento ao dicionário. Se key já existir, seu valor será sobrescrito com o novo valor.
    set(key, value) {
        if (key != null && value != null) {
            const tableKey = this.toStrFn(key);
            this.table[tableKey] = new ValuePair(key, value);
            return true;
        }
        return false;
    }  
}
