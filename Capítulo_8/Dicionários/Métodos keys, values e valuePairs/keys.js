import { defaultToString } from "../../ultil/util.js";
export default class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    // keys(): esse método devolve um array com todas as chaves contidas no dicionário.
    keys() {
        return this.keyValues().map(valuePair => valuePair.key);
    }

    // A lógica usada no método keys também pode ser escrita assim:
    keys() {
        const keys = [];
        const valuePairs = this.keyValues();
        for (let i = 0; i < valuePairs.length; i++) {
            keys.push(valuePairs[i].key);
        }
        return keys;
    }
}

