import { defaultEquals } from "../../models/util.js"
import { LinkedList } from "../../Listas Ligadas/Usando a Classe LinkedList/linkedList.js"
import { Node } from "../../models/linked-list-models.js"
class CircularLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
    }

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            let current = this.head;
            if (index === 0) {
                if (this.head == null) {
                    this.head = node;
                    node.next = this.head
                } else {
                    node.next = current;
                    current = this.getElementAt(this.size());
                    // atualiza o último elemento
                    this.head = node;
                    current.next = this.head
                }
            } else {
                const previus = this.getElementAt(index - 1);
                node.next = previus.next;
                previus.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }
}
