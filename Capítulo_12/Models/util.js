// defaultToString:
export function defaultToString(item) {
    if (item === null) {
        return "NULL";
    } else if ( item === undefined) {
        return "UNDEFINED";
    }  else if (typeof item === "string" || item instanceof String) {
        return `${item}`;
    }
    return item.toString();
}

// Classe ValuePair
export class ValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }

    toString() {
        return `[#${this.key}: ${this.value}]`;
    }
}

// Variável Colors
export const Colors = {
    WHITE: 0,
    GREY: 1,
    BLACK: 2
}

// Função initializeColor
export const initializeColor = vertices => {
    const color = {};
    for (let  i = 0; i < vertices.length; i++) {
        color[vertices[i]] = Colors.WHITE;
    }
    return color;
}
