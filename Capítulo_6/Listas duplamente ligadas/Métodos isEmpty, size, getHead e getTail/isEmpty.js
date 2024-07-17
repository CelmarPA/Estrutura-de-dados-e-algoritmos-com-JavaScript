import { defaultEquals } from "../../models/util.js";
import { DoublyNode } from "../../models/linked-list-models.js";
import LinkedList from "../../Listas Ligadas/Criando a classe LinkedList/LinkedList.js";

class DoublyLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
        this.tail = undefined;
    }

    isEmpty() {
        return this.size() === 0;
    }
}
