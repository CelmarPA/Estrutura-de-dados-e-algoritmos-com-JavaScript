import { defaultCompare, defaultEquals } from "../../models/util.js";
import LinkedList from "../../Listas Ligadas/Usando a Classe LinkedList/linkedList.js";
import { Node } from "../../models/linked-list-models.js";
export class SortedLinkedList extends LinkedList {
    constructor(equalFn = defaultEquals, compareFn = defaultCompare) {
        super(equalFn);
        this.compareFn = compareFn;
    }
}
