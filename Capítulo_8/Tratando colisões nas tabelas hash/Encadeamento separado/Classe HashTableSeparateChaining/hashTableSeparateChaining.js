import { defaultToString, ValuePair } from "../../../util/util.js";
import  LinkedList  from "../../../../Capítulo_6/Listas Ligadas/Usando a Classe LinkedList/linkedList.js";

// Classe HashTableSeparateChaining
class HashTableSeparateChaining {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }
}
