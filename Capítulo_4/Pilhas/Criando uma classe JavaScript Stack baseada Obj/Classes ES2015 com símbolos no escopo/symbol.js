// A ES2015 introduziu um novo tipo primitivo chamado Symbol que é imutável e pode ser usado como propriedade de um objeto. Vamos ver como podemos usá-lo para declarar a propriedade items na classe Stack (usaremos um array para armazenagem a fim de simplificar o código):
const _items = Symbol("stackItems");
class Stack {
    constructor() {
        this[_items] = [];
    }
    push(element) {
        this[_items].push(element);
    }

    pop() {
        return this[_items].pop();
    }

    peek() {
        return this[_items][[this_items].length - 1];
    }
    
    isEmpty() {
        return this[_items].length === 0;
    }

    size() {
        return this[_items].length;
    }

    clear() {
        this[_items] = [];
    }
}

// Essa abordagem oferece uma propriedade private falsa para a classe, pois o método Object.getOwnPropertySymbols também foi introduzido na ES6 e pode ser usado para obter todos os símbolos de propriedades declaradas na classe. Eis um exemplo de como podemos explorar e fazer um hack na classe Stack:
const stack = new Stack();
stack.push(5);
stack.push(8);
let objectSymbols = Object.getOwnPropertySymbols(stack)
console.log(objectSymbols.length); // 1
console.log(objectSymbols); // [Symbol()]
console.log(objectSymbols[0]); // Symbol()
stack[objectSymbols[0]].push(1);
console.log(stack[_items]);

/*
 Como podemos ver no código anterior, é possível obter o símbolo _items acessando stack[objectSymbols[0]]. Como a propriedade _items é um array, podemos executar qualquer operação de array, por exemplo, remover ou acrescentar um elemento no meio dele (o mesmo aconteceria se estivéssemos usando um objeto para armazenar os elementos). Todavia, não é isso que queremos, pois estamos trabalhando com uma pilha.
*/
