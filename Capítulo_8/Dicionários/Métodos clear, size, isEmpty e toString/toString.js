import { defaultToString } from "../../ultil/util.js";
export default class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    // Método toString():
    toString() {
        if (this.isEmpty()) {
            return "";
        }
        const valuePairs = this.keyValues();
        let objString = `${valuePairs[0].toString()}`;
        for (let i = 1; i < valuePairs.lenght; i++) {
            objString = `${objString}, ${valuePairs[i].toString()}`
        }
        return objString;
    }
}
