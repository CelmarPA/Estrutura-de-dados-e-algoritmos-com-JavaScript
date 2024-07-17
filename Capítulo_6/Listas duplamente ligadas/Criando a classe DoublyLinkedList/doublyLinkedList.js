import { defaultEquals } from "../../models/util.js";
import { DoublyNode } from "../../models/linked-list-models.js";
import LinkedList from "../../Listas Ligadas/Criando a classe LinkedList/LinkedList.js";
// Class DoublyLinkedList:
class DoublyLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals, count, head) {
        super(equalsFn);
        this.tail = undefined;
    }
}
