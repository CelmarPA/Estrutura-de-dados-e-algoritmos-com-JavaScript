import { defaultEquals } from "../../models/util.js";
import  LinkedList  from "../../Listas Ligadas/Usando a Classe LinkedList/linkedList.js";
import { Node } from "../../models/linked-list-models.js";
export class CircularLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
    }

    insert(element, index) {
        if (index >= 0 && index <= this._getCount()) {
            const node = new Node(element);
            let current = this._getHead();
            if (index === 0) {
                if (this._getHead() == null) {
                    this._setHead(node);
                    node.next = this._getHead();
                } else {
                    node.next = current;
                    current = this.getElementAt(this._getCount() - 1);
                    // atualiza o último elemento
                    this._setHead(node);
                    current.next = this._getHead();
                }
            } else {
                const previus = this.getElementAt(index - 1);
                node.next = previus.next;
                previus.next = node;
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
                if (this.size() === 1) {
                    this._setHead(undefined);
                } else {
                    const removed = this._getHead();
                    current = this.getElementAt(this.size());
                    this._setHead(this._getHead().next);
                    current.next = this._getHead();
                    current = removed;
                }
            } else {
                // não há necessidade de atualizar o último elemento da lista circular
                const previus = this.getElementAt(index - 1);
                current = previus.next;
                previus.next = current.next;
            }
            this._decrementCount();
            return current.element;
        }
        return undefined;
    }
}

// Testando a classe LinkedList
const circularLinkedList = new CircularLinkedList();

// Testando a método push
circularLinkedList.push(1);
circularLinkedList.push(2);
circularLinkedList.push(3);
console.log(circularLinkedList.toString()); // Saída: "1, 2, 3"

// Testando o método removeAt
console.log(circularLinkedList.removeAt(1)); // Saída: 2
console.log(circularLinkedList.toString()); // Saída: "1, 3"

// Testando o método getElementAt
console.log(circularLinkedList.getElementAt(1).element); // Saída: 3
console.log(circularLinkedList.getElementAt(0).element); // Saída: 1

// Testando o método insert
circularLinkedList.insert(4, 1);
console.log(circularLinkedList.toString()); // Saída: "1, 4, 3"
circularLinkedList.insert(5, 0);
console.log(circularLinkedList.toString()); // Saída: "5, 1, 4, 3"

// Testando o método indexOf
console.log(circularLinkedList.indexOf(4)); // Saída: 2
console.log(circularLinkedList.indexOf(6)); // Saída: -1

// Testando o método remove
console.log(circularLinkedList.remove(4)); // Saída: 4
console.log(circularLinkedList.toString()); // Saída: "5, 1, 3"

// Testando o método size
console.log(circularLinkedList.size()); // Saída: 3

// Testando o método isEmpty
console.log(circularLinkedList.isEmpty()); // Saída: false
circularLinkedList.remove(5);
circularLinkedList.remove(1);
circularLinkedList.remove(3);
console.log(circularLinkedList.isEmpty()); // Saída: true

// Testando o método getHead
circularLinkedList.push(6);
console.log(circularLinkedList.getHead()); // Saída: 6

// Testando o método toString
circularLinkedList.push(7);
circularLinkedList.push(8);
console.log(circularLinkedList.toString()); // Saída: "6, 7, 8"

// Testando o método clear
circularLinkedList.clear();
console.log(circularLinkedList.toString());
console.log(circularLinkedList.isEmpty());

// Adicionando alguns elementos
circularLinkedList.insert('A', 0); // Lista: A
circularLinkedList.insert('B', 1); // Lista: A -> B
circularLinkedList.insert('C', 2); // Lista: A -> B -> C
circularLinkedList.insert('D', 3); // Lista: A -> B -> C -> D

console.log("Lista antes da remoção:");
let current = circularLinkedList._getHead();
for (let i = 0; i < circularLinkedList.size(); i++) {
    console.log(current.element);
    current = current.next;
}


// Removendo o elemento na posição 1 (índice 1 - começando do 0)
const removedElement = circularLinkedList.removeAt(1);

console.log(`Elemento removido: ${removedElement}`);

console.log("Lista após a remoção:");
current = circularLinkedList._getHead();
for (let i = 0; i < circularLinkedList.size(); i++) {
    console.log(current.element);
    current = current.next;
}
