import { defaultToString } from "../../ultil/util.js";
import { ValuePair } from "../../util/util.js";
export default class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    // keyValues(): esse método devolve um array com todos os pares de valores [chave, valor] contidos no dicionário.
    keyValues() {
        return Object.values(this.table);
    }

    // Como o método Object.values pode não estar disponível ainda em todos os navegadores, podemos também usar o código a seguir como alternativa:
    keyValues() {
        const valuePairs = [];
        for (const k in this.table) {
            if (this.hasKey(k)) {
                valuePairs.push(this.table[k]);
            }
        }
        return valuePairs;
    }
}

