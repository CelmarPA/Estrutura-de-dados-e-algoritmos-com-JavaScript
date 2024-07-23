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

// Classe ValuePairLazy
export class ValuePairLazy extends ValuePair {
    constructor(key, value, isDeleted = false) {
        super(key, value);
        this.key = key;
        this.value = value;
        this.isDeleted = isDeleted;
    }
}
