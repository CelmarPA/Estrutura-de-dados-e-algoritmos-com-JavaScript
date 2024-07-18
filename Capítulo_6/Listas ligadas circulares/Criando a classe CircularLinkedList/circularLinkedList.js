import { defaultEquals } from "../../models/util.js";
import { LinkedList } from "../../Listas Ligadas/Usando a Classe LinkedList/linkedList.js";
import { Node } from "../../models/linked-list-models.js";
class CircularLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
    }
}
