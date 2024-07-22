import { defaultToString } from "../../ultil/util.js";
export default class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    // clear(): esse método remove todos os valores do dicionário.
    clear() {
        this.table = {};
    }
}
