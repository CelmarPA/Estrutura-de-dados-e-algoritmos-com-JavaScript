import { defaultEquals } from "../../models/util.js";
import { DoublyNode } from "../../models/linked-list-models.js";
import LinkedList from "../../Listas Ligadas/Criando a classe LinkedList/LinkedList.js";

class DoublyLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
        this.tail = undefined;
    }

    inverseToString() {
        if (this.tail == null) {
            return "";
        }
        let objString = `${this.tail.element}`;
        let previous = this.tail.prev;
        while (previous != null) {
            objString = `${objString}, ${previous.element}`;
            previous = previous.prev;
        }
        return objString;
    }
}
