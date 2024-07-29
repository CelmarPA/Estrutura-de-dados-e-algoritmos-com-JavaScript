// Classe Node
export class Node {
    constructor(key) {
        this.key = key; // valor do nó
        this.left = null; // refêrencia ao nó filho à esquerda
        this.right = null; // refêrencia ao nó filho à direita
    }
}

// Colors
export let Colors;

(function(Colors) {
    Colors[(Colors["RED"] = 0)] = "RED"
    Colors[(Colors["BLACK"] = 1)] = "BLACK"
})(Colors || (Colors = {}));

// Classe RedBlackNode
export class RedBlackNode extends Node {
    constructor(key) {
        super(key);
        this.key = key;
        this.color = Colors.RED;
        this.parent = null;
    }
    
    isRed() {
        return this.color === Colors.RED;
    }
}