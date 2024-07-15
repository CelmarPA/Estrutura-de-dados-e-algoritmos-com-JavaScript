// Como estamos trabalhando com um objeto, essa versão do método push nos permite fazer push somente de um único elemento de cada vez. Podemos ver o código do método push a seguir:
class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }
    push(element) {
        this.items[this.count] = element;
        this.count++;
    }
}

const stack = new Stack();
stack.push(5);
stack.push(8);

console.log(stack.items);
console.log(stack.count);