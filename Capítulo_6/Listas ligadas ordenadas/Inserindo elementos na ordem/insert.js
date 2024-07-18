import { defaultCompare, defaultEquals } from "../../models/util.js";
import LinkedList from "../../Listas Ligadas/Usando a Classe LinkedList/linkedList.js";
import { Node } from "../../models/linked-list-models.js";
export class SortedLinkedList extends LinkedList {
    constructor(equalFn = defaultEquals, compareFn = defaultCompare) {
        super(equalFn);
        this.compareFn = compareFn;
    }

    insert(element, index = 0) {
        if (this.isEmpty()) {
            return super.insert(element, 0);
        }
        const pos = this.getIndexNextSortedElement(element);
        return super.insert(element, pos);
    }

    getIndexNextSortedElement(element) {
        let current = this.head;
        let i = 0;
        for (; i < this.size() && current; i++) {
            const comp = this.compareFn(element, current.element);
            if (comp === Compare.LESS_THAN) {
                return i;
            }
            current = current.next;
        }
        return i;
    }
}
