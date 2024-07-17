import { defaultEquals } from "../../models/util.js";
import { DoublyNode } from "../../models/linked-list-models.js";
import LinkedList from "../../Listas Ligadas/Criando a classe LinkedList/LinkedList.js";
// Class DoublyLinkedList:
class DoublyLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
        this.tail = undefined;
    }

    push(element) {
        const node = new DoublyNode(element);
        if (this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            // adicionar na final
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        count++;
    }
}
