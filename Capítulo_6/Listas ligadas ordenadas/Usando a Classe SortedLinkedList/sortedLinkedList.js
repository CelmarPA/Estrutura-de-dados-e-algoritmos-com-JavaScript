import { Compare, defaultCompare, defaultEquals } from "../../models/util.js";
import LinkedList from "../../Listas Ligadas/Usando a Classe LinkedList/linkedList.js"

export class SortedLinkedList extends LinkedList {
    constructor(equalFn = defaultEquals, compareFn = defaultCompare) {
        super(equalFn);
        this.compareFn = compareFn
    }

    insert(element, index = 0) {
        if (this.isEmpty()) {
            return super.insert(element, 0);
        }
        const pos = this.getIndexNextSortedElement(element);
        return super.insert(element, pos);
    }

    getIndexNextSortedElement(element) {
        let current = this._getHead();
        let i = 0;
        for ( ; i < this.size() && current; i++) {
            const comp =this.compareFn(element, current.element);
            if (comp === Compare.LESS_THAN) {
                return i;
            }
            current = current.next;
        }
        return i;
    }
}

// Criando uma instância da SortedLinkedList
const sortedLinkedList = new SortedLinkedList();

// Adicionando alguns elementos
sortedLinkedList.insert(3); // Lista: 3
sortedLinkedList.insert(1); // Lista: 1 -> 3
sortedLinkedList.insert(4); // Lista: 1 -> 3 -> 4
sortedLinkedList.insert(2); // Lista: 1 -> 2 -> 3 -> 4

console.log("Lista ordenada:");
let current = sortedLinkedList._getHead();
for (let i = 0; i < sortedLinkedList.size(); i++) {
    console.log(current.element);
    current = current.next;
}

// Tentando adicionar mais elementos
sortedLinkedList.insert(0); // Lista: 0 -> 1 -> 2 -> 3 -> 4
sortedLinkedList.insert(5); // Lista: 0 -> 1 -> 2 -> 3 -> 4 -> 5

console.log("Lista ordenada após mais inserções:");
current = sortedLinkedList._getHead();
for (let i = 0; i < sortedLinkedList.size(); i++) {
    console.log(current.element);
    current = current.next;
}
