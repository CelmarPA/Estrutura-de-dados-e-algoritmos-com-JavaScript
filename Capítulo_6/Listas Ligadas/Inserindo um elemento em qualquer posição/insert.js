// insert(element, position): esse método insere um novo elemento em uma posição específica da lista.
import { defaultEquals } from "../../models/util.js";
import { Node } from "../../models/linked-list-models.js";
export default class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            if (index === 0) {
                // adiciona na primeira posição
                const current = this.head;
                node.next = current;
                this.head = node;
            } else {
                const previous = this.getElementAt(index - 1);
                const current = previous.next;
                node.next = current;
                previous.next = node;
            }
            this.count++; // atualiza o tamanho da lista
            return true;
        }
        return false;
    }
}
