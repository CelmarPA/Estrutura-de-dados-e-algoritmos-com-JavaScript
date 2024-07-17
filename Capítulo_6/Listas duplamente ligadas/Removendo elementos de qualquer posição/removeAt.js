import { defaultEquals } from "../../models/util.js";
import { DoublyNode } from "../../models/linked-list-models.js";
import LinkedList from "../../Listas Ligadas/Criando a classe LinkedList/LinkedList.js";

class DoublyLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
        this.tail = undefined;
    }

    removeAt(index) {
        if (index >= 0 && index <= this.count) {
            let current = this.head;
            if (index === 0) {
                this.head = current.next;
                // se houver apenas um item, atualizamos tail também
                if (this.count === 1) {
                    this.tail = undefined;
                } else {
                    this.head.prev = undefined;
                }
            } else if (index === this.count - 1) {
                // último item
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = undefined;
            } else {
                current = this.getElementAt(index);
                const previous = current.prev;
                // faz a ligação de previous com o next de current – pula esse elemento para removê-lo
                previous.next = current.next;
                current.next.prev = previous;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
}
