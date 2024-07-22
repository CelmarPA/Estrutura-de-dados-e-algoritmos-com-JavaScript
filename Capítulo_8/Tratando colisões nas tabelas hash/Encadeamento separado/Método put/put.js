import { defaultToString, ValuePair } from "../../../util/util.js";
import  LinkedList  from "../../../../Capítulo_6/Listas Ligadas/Usando a Classe LinkedList/linkedList.js";

class HashTableSeparateChaining {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    //Método put:
    put(key, value) {
        if (key != null && value != null) {
            const position = this.hashCode(key);
            if (this.table[position] == null) {
                this.table[position] = new LinkedList();
            }
            this.table[position].push(new ValuePair(key, value));
            return true;
        }
        return false;
    }
}
