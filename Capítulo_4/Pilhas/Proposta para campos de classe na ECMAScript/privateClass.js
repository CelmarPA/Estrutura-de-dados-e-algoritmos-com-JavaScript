// Em JavaScript, a partir do ECMAScript 2022 (ES2022), é possível declarar propriedades privadas em classes utilizando o prefixo #. Essas propriedades só podem ser acessadas dentro da classe onde foram definidas. Eis um exemplo:
export class Stack {
    #count;
    #items;
    constructor() {
        this.#count = 0;
        this.#items = {}
    }

    push(element) {
        this.#items[this.#count] = element;
        this.#count++;
    }

    size() {
        return this.#count;
    }

    isEmpty() {
        return this.#count === 0;
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.#count--;
        const result = this.#items[this.#count];
        delete this.#items[this.#count];
        return result;
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.#items[this.#count - 1]
    }

    clear() {
        this.#count = 0;
        this.#items = {};
    }

    toString() {
        if (this.isEmpty()) {
            return "";
        }
        let objString = `${this.#items[0]}`;
        for (let i = 1; i < this.#count; i++) {
            objString = `${objString}, ${this.#items[i]}`;
        }
        return objString;
    }
}

// const stack = new Stack();
// console.log(stack.isEmpty()); // true

// stack.push(5);
// stack.push(8);

// console.log(stack.peek()); // 8

// stack.push(11);
// console.log(stack.size()); // 3
// console.log(stack.isEmpty()) // false

// stack.push(15);

// stack.pop();
// stack.pop();
// console.log(stack.size()) // 2

// console.log(stack.toString())

// stack.clear();
// console.log(stack.toString());