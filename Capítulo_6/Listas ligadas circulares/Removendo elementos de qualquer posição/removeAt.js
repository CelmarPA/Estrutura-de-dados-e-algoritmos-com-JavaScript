import { defaultEquals } from "../../models/util.js"
import { LinkedList } from "../../Listas Ligadas/Usando a Classe LinkedList/linkedList.js"
import { Node } from "../../models/linked-list-models.js"
class CircularLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
    }

    removeAt(index) {
        if (index >= 0 && index <= this.count) {
            let current = this.head;
            if (index === 0) {
                if (this.size() === 1) {
                    this.head = undefined;
                } else {
                    const removed = this.head;
                    current = this.getElementAt(this.size());
                    this.head = this.head.next;
                    current.next = this.head;
                    current = removed;
                }
            } else {
                // não há necessidade de atualizar o último elemento da lista circular
                const previus = this.getElementAt(index - 1);
                current = previus.next;
                previus.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
}