// removeAt(position): esse método remove um item de uma posição específica da lista.
import { defaultEquals } from "../models/util.js";
import { Node } from "../models/linked-list-models.js";
export default class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }

    removeAt(index) {
        // verifica valores fora do intervalo
        if (index > 0 && index < this.count) {
            // verifica se index é válido
            let current = this.head;
            if (index === 0) {
                // remove o primeiro elemento da lista
                this.head = current.next;
            } else {
                let previous;
                for (let i = 0; i < index; i++) {
                    // iterar pelos nós da lista ligada até chegarmos à posição desejada
                    previous = current;
                    current = current.next;
                }
                // faz a ligação de previous com o next de current: pula esse elemento para removê-lo
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined; // Se a posição não for válida retorna undefined
    }
}

// Refatorando o método remove
// Podemos refatorar o método remove e usar o método getElementAt criado.
if (index === 0) {
    this.head = current.next;
} else {
    const previous = this.getElementAt(index - 1);
    current = previous.next;
    previous.next = current.next
}
this.count--;
