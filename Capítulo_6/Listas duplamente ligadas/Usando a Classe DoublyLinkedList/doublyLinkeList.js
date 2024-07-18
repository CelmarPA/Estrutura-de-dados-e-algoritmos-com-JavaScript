import { defaultEquals } from "../../models/util.js";
import { DoublyNode } from "../../models/linked-list-models.js";
import LinkedList from "../../Listas Ligadas/Usando a Classe LinkedList/linkedList.js";

export class DoublyLinkedList extends LinkedList {
    #tail;
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
        this.#tail = undefined;
    }

    push(element) {
        const node = new DoublyNode(element);
        if (this.getHead() == null) {
            this._setHead(node);
            this.#tail = node;
        } else {
            // adicionar na final
            this.#tail.next = node;
            node.prev = this.#tail;
            this.#tail = node;
        }
        this._incrementCount();
    }

    insert(element, index) {
        if (index >= 0 && index <= this._getCount()) {
            const node = new DoublyNode(element);
            let current = this._getHead();
            if (index === 0) {
                if (this._getHead() == null) {
                    this._setHead(node);
                    this.#tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    this._setHead(node);
                }
            } else if (index === this._getCount()) {
                // último item
                current = this.#tail;
                current.next = node;
                node.prev = current;
                this.#tail = node;
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }
            this._incrementCount();
            return true;
        }
        return false;
    }

    removeAt(index) {
        if (index >= 0 && index <= this._getCount()) {
            let current = this._getHead();
            if (index === 0) {
                this._setHead(current.next);
                // se houver apenas um item, atualizamos tail também
                if (this._getCount() === 1) {
                    this.#tail = undefined;
                } else {
                    this._getHead().prev = undefined;
                }
            } else if (index === this._getCount() - 1) {
                // último item
                current = this.#tail;
                this.#tail = current.prev;
                this.#tail.next = undefined;
            } else {
                current = this.getElementAt(index);
                const previous = current.prev;
                // faz a ligação de previous com o next de current – pula esse elemento para removê-lo
                previous.next = current.next;
                current.next.prev = previous;
            }
            this._decrementCount();
            return current.element;
        }
        return undefined;
    }

    indexOf(element) {
        let current = this._getHead();
        let index = 0;
        while (current != null) {
            if (this.equalsFn(element, current.element)) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }

    getHead() {
        return this._getHead();
    }

    getTail() {
        return this.#tail;
    }

    clear() {
        super.clear();
        this.#tail = undefined;
    }

    toString() {
        if (this._getHead() == null) {
            return "";
        }
        let objString = `${this._getHead().element}`;
        let current = this._getHead().next;
        while (current != null) {
            objString = `${objString}, ${current.element}`;
            current = current.next;
        }
        return objString;
    }

    inverseToString() {
        if (this.#tail == null) {
            return "";
        }
        let objString = `${this.#tail.element}`;
        let previous = this.#tail.prev;
        while (previous != null) {
            objString = `${objString}, ${previous.element}`;
            previous = previous.prev;
        }
        return objString;
    }
}

// // Criação da lista
// const doublyLinkedList = new DoublyLinkedList();

// // Teste do método push
// doublyLinkedList.push(10);
// doublyLinkedList.push(20);
// doublyLinkedList.push(30);
// console.log(doublyLinkedList.toString()); // Saída: 10, 20, 30
// console.log(doublyLinkedList.inverseToString()); // Saída: 30, 20, 10

// // Teste do método insert
// doublyLinkedList.insert(5, 0); // Inserir no início
// doublyLinkedList.insert(25, 3); // Inserir no meio
// doublyLinkedList.insert(35, 5); // Inserir no final
// console.log(doublyLinkedList.toString()); // Saída: 5, 10, 20, 25, 30, 35

// // Teste do método removeAt
// doublyLinkedList.removeAt(0); // Remover do início
// console.log(doublyLinkedList.toString()); // Saída: 10, 20, 25, 30, 35

// doublyLinkedList.removeAt(2); // Remover do meio
// console.log(doublyLinkedList.toString()); // Saída: 10, 20, 30, 35

// doublyLinkedList.removeAt(3); // Remover do final
// console.log(doublyLinkedList.toString()); // Saída: 10, 20, 30

// // Teste do método indexOf
// console.log(doublyLinkedList.indexOf(20)); // Saída: 1
// console.log(doublyLinkedList.indexOf(50)); // Saída: -1

// // Teste do método getHead e getTail
// console.log(doublyLinkedList.getHead().element); // Saída: 10
// console.log(doublyLinkedList.getTail().element); // Saída: 30

// // Teste do método clear
// doublyLinkedList.clear();
// console.log(doublyLinkedList.isEmpty()); // saída: true
// console.log(doublyLinkedList.toString()); // Saída: ""
// console.log(doublyLinkedList.getHead()); // Saída: undefined
// console.log(doublyLinkedList.getTail()); // Saída: undefined
