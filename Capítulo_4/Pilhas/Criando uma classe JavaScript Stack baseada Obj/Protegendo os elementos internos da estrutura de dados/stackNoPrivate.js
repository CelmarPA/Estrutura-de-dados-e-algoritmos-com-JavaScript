class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }

    push(element) {
        this.items[this.count] = element;
        this.count++;
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.count === 0;
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }

    clear() {
        this.items = {};
        this.count = 0;
    }

    toString() {
        if (this.isEmpty()) {
            return "";
        }
        let objString = `${this.items[0]}`;
        for (let i = 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`;
        }
        return objString;
    }
}

/*
 Ao criar uma estrutura de dados ou um objeto que outros desenvolvedores poderão usar também, devemos proteger os elementos internos para que somente os métodos que expusermos sejam usados para modificar a estrutura interna. No caso da classe Stack, queremos garantir que os elementos sejam adicionados no topo da pilha e que não seja possível adicionar elementos em sua base nem em qualquer outra posição aleatória (no meio da pilha). Infelizmente, as propriedades items e count que declaramos na classe Stack não estão protegidas, e esse comportamento se deve ao modo como as classes funcionam em JavaScript. Experimente executar o código a seguir:
*/
const stack = new Stack();
console.log(Object.getOwnPropertyDescriptors(stack));
console.log(Object.keys(stack));
console.log(stack.items);