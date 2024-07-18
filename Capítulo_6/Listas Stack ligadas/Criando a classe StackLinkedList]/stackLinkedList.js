import { DoublyLinkedList } from "../../Listas duplamente ligadas/Usando a Classe DoublyLinkedList/doublyLinkeList.js"
class StackLinkedList {
    constructor() {
        this.items = new DoublyLinkedList();
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.removeAt(this.size() - 1);
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.getElementAt(this.size() - 1).element;
    }

    size() {
        return this.items.size();
    }

    isEmpty() {
        return this.items.isEmpty();
    }

    clear() {
        this.items.clear();
    }

    toString() {
        return this.items.toString()
    }
}

// Exemplo de uso
const stack = new StackLinkedList();
console.log(stack.isEmpty());  // true

stack.push(5);
stack.push(8);
console.log(stack.peek());     // 8

stack.push(11);
console.log(stack.size());     // 3
console.log(stack.isEmpty());  // false

stack.push(15);
stack.pop();
console.log(stack.size());     // 3

console.log(stack.toString()); // "5, 8, 11"
stack.clear();
console.log(stack.isEmpty());  // true