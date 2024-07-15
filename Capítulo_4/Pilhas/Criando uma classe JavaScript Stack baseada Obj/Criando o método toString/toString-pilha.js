// Na versão com array, não precisamos nos preocupar com um método toString, pois a estrutura de dados usará o método já oferecido pelo array. Para essa versão com objeto, criaremos um método toString para que possamos exibir o conteúdo da pilha, de modo semelhante a um array:
class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }
    toString() {
        if (this.isEmpty()) {
            return "";
        }
        let objString = `${this.items[0]}`;
        for (let i = 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}