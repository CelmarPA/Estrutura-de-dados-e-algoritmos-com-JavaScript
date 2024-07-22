import { defaultToString, ValuePair } from "../../../util/util.js";
import { LinkedList } from "../../../../Capítulo_6/Listas Ligadas/Usando a Classe LinkedList/linkedList.js";

class HashTableSeparateChaining {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    //Método remove:
    remove(key) {
        const position = this.hashCode(key);
        const linkedList = this.table[position];
        if (linkedList != null && !linkedList.isEmpty()) {
            let current = linkedList.getHead();
            while (current != null) {
                if (current.element.key === key) {
                    linkedList.remove(current.element);
                    if (linkedList.isEmpty()) {
                        delete this.table[position];
                    }
                    return true
                }
                current = current.next;
            }
        }
        return false;
    }
}