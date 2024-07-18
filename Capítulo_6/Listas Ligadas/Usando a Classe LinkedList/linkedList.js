import { defaultEquals } from "../../models/util.js";
import { Node } from "../../models/linked-list-models.js";
export default class LinkedList {
    #count;
    #head;

    constructor(equalsFn = defaultEquals) {
        this.#count = 0;
        this.#head = undefined;
        this.equalsFn = equalsFn;
    }

    push(element) {
        const node = new Node(element);
        let current;
        if (this.#head == null) {
            this.#head = node;
        } else {
            current = this.#head;
            while (current.next != null) {
                current = current.next;
            }
            // e atribui o novo elemento a next para criar a ligação
            current.next = node;
        }
        this.#count++;
    }

    removeAt(index) {
        // verifica valores fora do intervalo
        if (index >= 0 && index <= this.#count) {
            let current = this.#head;
            // Remove o primeiro item
            if (index === 0) {
                this.#head = current.next;
            } else {
                let previous;
                for (let i = 0; i < index; i++) {
                    previous = current;
                    current = current.next;
                }
                // faz a ligação de previous com o next de current: pula esse elemento para removê-lo
                previous.next = current.next;
            }
            this.#count--;
            return current.element;
        }
        return undefined;
    }

    getElementAt(index) {
        if (index >= 0 && index <= this.#count) {
            let node = this.#head;
            for (let i = 0; i < index && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    insert(element, index) {
        if (index >= 0 && index <= this.#count) {
            const node = new Node(element);
            if (index === 0) {
                // adiciona na primeira posição
                const current = this.#head;
                node.next = current;
                this.#head = node;
            } else {
                const previous = this.getElementAt(index - 1);
                const current = previous.next;
                node.next = current;
                previous.next = node;
            }
            this.#count++; // atualiza o tamanho da lista
            return true;
        }
        return false;
    }

    indexOf(element) {
        let current = this.#head;
        for (let i = 0; i < this.#count && current != null; i++) {
            if (this.equalsFn(element, current.element)) {
                return i;
            }
            current = current.next;
        }
        return -1;
    }

    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    size() {
        return this.#count;
    }

    isEmpty() {
        return this.size() === 0;
    }

    getHead() {
        return this.#head.element;
    }

    clear() {
        this.#head = undefined;
        this.#count = 0;
    }

    toString() {
        if (this.#head == null) {
            return "";
        }
        let objString = `${this.#head.element}`;
        let current = this.#head.next;
        for (let i = 1; i < this.size() && current != null; i++) {
            objString = `${objString}, ${current.element}`;
            current = current.next;
        }
        return objString;
    }

    // Métodos protegidos para acessar atributos privados
    _getHead() {
        return this.#head;
    }

    _setHead(node) {
        this.#head = node;
    }

    _getCount() {
        return this.#count;
    }

    _incrementCount() {
        this.#count++;
    }

    _decrementCount() {
        this.#count--;
    }
}

// // Testando a classe LinkedList
// const list = new LinkedList();

// // Testando a método push
// list.push(1);
// list.push(2);
// list.push(3);
// console.log(list.toString()); // Saída: "1, 2, 3"

// // Testando o método removeAt
// console.log(list.removeAt(1)); // Saída: 2
// console.log(list.toString()); // Saída: "1, 3"

// // Testando o método getElementAt
// console.log(list.getElementAt(1).element); // Saída: 3
// console.log(list.getElementAt(0).element); // Saída: 1

// // Testando o método insert
// list.insert(4, 1);
// console.log(list.toString()); // Saída: "1, 4, 3"
// list.insert(5, 0);
// console.log(list.toString()); // Saída: "5, 1, 4, 3"

// // Testando o método indexOf
// console.log(list.indexOf(4)); // Saída: 2
// console.log(list.indexOf(6)); // Saída: -1

// // Testando o método remove
// console.log(list.remove(4)); // Saída: 4
// console.log(list.toString()); // Saída: "5, 1, 3"

// // Testando o método size
// console.log(list.size()); // Saída: 3

// // Testando o método isEmpty
// console.log(list.isEmpty()); // Saída: false
// list.remove(5);
// list.remove(1);
// list.remove(3);
// console.log(list.isEmpty()); // Saída: true

// // Testando o método getHead
// list.push(6);
// console.log(list.getHead()); // Saída: 6

// // Testando o método toString
// list.push(7);
// list.push(8);
// console.log(list.toString()); // Saída: "6, 7, 8"

// // Testando o método clear
// list.clear();
// console.log(list.toString());
// console.log(list.isEmpty());
