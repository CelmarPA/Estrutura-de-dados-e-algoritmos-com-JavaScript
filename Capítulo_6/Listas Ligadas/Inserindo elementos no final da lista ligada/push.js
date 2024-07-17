// push(element): esse método adiciona um novo elemento no final da lista.

import { defaultEquals } from "../models/util.js"
import { Node } from "../models/linked-list-models.js"
export default class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }

    push(element) {
        const node = new Node(element); // cria um novo Node passando element como o seu valor
        let current;
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            // e atribui o novo elemento a next para criar a ligação
            current.next = node;
        }
        this.count++;
    }
}

// Podemos usar e testar a estrutura de dados que criamos até agora com o código a seguir:
const list = new LinkedList();
list.push(15);
list.push(10);
console.log(list.head)
