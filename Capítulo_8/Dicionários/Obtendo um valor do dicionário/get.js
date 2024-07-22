import { defaultToString } from "../../ultil/util.js";
export default class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    // get(key): esse método devolve um value específico do dicionário usando key como o parâmetro de busca.
    get(key) {
        const valuePair = this.table[this.toStrFn(key)];
        return valuePair == null ? undefined : valuePair.value;
    }

    // Segunda opção do método get:
    get(key) {
        if (this.haskey(key)) {
            return this.table[this.toStrFn(key)];
        }
        return undefined;
    }
}
