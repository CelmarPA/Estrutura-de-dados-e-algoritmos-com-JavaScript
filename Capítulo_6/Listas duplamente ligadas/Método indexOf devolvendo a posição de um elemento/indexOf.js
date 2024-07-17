import { defaultEquals } from "../../models/util.js";
import { DoublyNode } from "../../models/linked-list-models.js";
import LinkedList from "../../Listas Ligadas/Criando a classe LinkedList/LinkedList.js";

class DoublyLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
        this.tail = undefined;
    }

    indexOf(element) {
        let current = this.head;
        let index = 0;
        while (current != null) {
            if(this.equalsFn(element, current.element)) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }
}