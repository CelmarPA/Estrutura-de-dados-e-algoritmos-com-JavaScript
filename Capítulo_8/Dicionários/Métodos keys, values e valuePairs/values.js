import { defaultToString } from "../../ultil/util.js";
export default class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    // values(): esse método devolve um array com todos os valores contidos no dicionário.
    values() {
        return this.keyValues().map(valuePair => valuePair.value);
    }
}

