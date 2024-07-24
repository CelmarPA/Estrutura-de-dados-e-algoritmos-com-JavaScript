import { defaultToString, ValuePair } from "../util/util.js";

// Classe HashTableLinearProbing
class HashTableLinearProbing {
    #table;
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.#table = {};
    }

    // Método getter para  #table
    _getTable() {
        return this.#table;
    }

    // Método setter para  #table
    _setTable(key, item) {
        this.#table[key] = item;
    }

    // Método djb2HashCode
    djb2HashCode(key) {
        const tableKey = this.toStrFn(key);
        let hash = 5381;
        for (let i = 0; i < tableKey.length; i++) {
            hash = (hash * 33) + tableKey.charCodeAt(i);
        }
        return hash % 1013;
    }

    // Método hashCode
    hashCode(key) {
        return this.djb2HashCode(key);
    }

    // Méodo put
    put(key, value) {
        if (key != null && value != null) {
            const position = this.hashCode(key);
            const table = this._getTable();
            if (table[position] == null) {
                this._setTable(position, new ValuePair(key, value));
            } else {
                let index = position + 1;
                while (table[index] != null) {
                    index++;
                }
                this._setTable(index, new ValuePair(key, value));
            }
            return true;
        }
        return false;
    }

    // Método get
    get(key) {
        const position =  this.hashCode(key);
        const table = this._getTable();
        if (table[position] != null) {
            if (table[position].key === key) {
                return table[position].value;
            }
            let index = position + 1;
            while (table[index] != null && table[index].key !== key) {
                index++;
            }
            if (table[index] != null && table[index].key === key) {
                return table[index].value;
            }
        }
        return undefined;
    }

    // Método remove
    remove(key) {
        const position = this.hashCode(key);
        const table = this._getTable();
        if (table[position] != null) {
            if (table[position].key === key) {
                delete table[position];
                this.verifyRemoveSideEffect(key, position);
                return true;
            }
            let index = position + 1;
            while (table[index] != null && table[index].key !== key) {
                index++;
            }
            if (table[index] != null && table[index].key === key) {
                delete table[index];
                this.verifyRemoveSideEffect(key, index);
                return true
            }
        }
        return false;
    }

    // Método verifyRemoveSideEffect
    verifyRemoveSideEffect(key, removedPosition) {
        const hash = this.hashCode(key);
        let index = removedPosition + 1;
        const table = this._getTable();
        while (table[index] != null) {
            const posHash = this.hashCode(table[index].key);
            if (posHash <= hash || posHash <= removedPosition) {
                table[removedPosition] = table[index];
                delete table[index];
                removedPosition = index;
            }
            index++;
        }
    }

    // Método isEmpty 
    isEmpty() {
        return this.size() === 0;
    }

    // Método size
    size() {
        return Object.keys(this._getTable()).length;
    }
    
    // Método clear
    clear() {
        this.#table = {};
    }

    // Método toString
    toString() {
        if (this.isEmpty()) {
            return "";
        }
        const table =  this._getTable();
        const keys = Object.keys(table);
        let objString = `{${keys[0]} => ${table[keys[0]].toString()}}`;
        for (let i = 1; i < keys.length; i++) {
            objString = `${objString}, {${keys[i]} => ${table[keys[i]].toString()}}`;
        }
        return objString;
    }
}

// Criação da instância da tabela hash
const hashTable = new HashTableLinearProbing();

// Adicionando pares chave-valor
hashTable.put('Ygritte', 'Ygrittef@email.com');
hashTable.put('Jonathan', 'Jonathan@email.com');
hashTable.put('Jamie', 'Jamie@email.com');
hashTable.put('Jack', 'Jack@email.com');
hashTable.put('Jasmine', 'Jasmine@email.com');
hashTable.put('Jake', 'Jake@email.com');
hashTable.put('Nathan', 'Nathan@email.com');
hashTable.put('Athelstan', 'Athelstan@email.com');
hashTable.put('Sue', 'Sue@email.com');
hashTable.put('Aethelwulf', 'Aethelwulf@email.com');
hashTable.put('Sargeras', 'Sargeras@email.com');

// Recuperando valores
console.log(hashTable.get('Ygritte')); // Output: Ygrittef@email.com
console.log(hashTable.get('Jonathan')); // Output: Jonathan@email.com
console.log(hashTable.get('Jamie')); // Output: Jamie@email.com
console.log(hashTable.get('Jake')); // Output: Jake@email.com
console.log(hashTable.get('Gandalf')); // Output: undefined

// Removendo valores
console.log(hashTable.remove('Jonathan')); // Output: true
console.log(hashTable.get('Jonathan')); // Output: undefined

// Exibindo o conteúdo da tabela hash
console.log(hashTable.toString())

// Limpando a tabela hash
hashTable.clear();
console.log(hashTable.isEmpty()); // Output: true
console.log(hashTable.size()); // Output: 0
