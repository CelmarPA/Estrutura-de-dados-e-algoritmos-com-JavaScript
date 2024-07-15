// Alguns desenvolvedores preferem usar a convenção de nomenclatura com underscore para marcar um atributo como private em JavaScript:
class Stack {
    constructor() {
        this._count = 0;
        this._items = {};
    }
}

// Essa convenção consiste em inserir um underscore (_) como prefixo no nome do atributo. No entanto, essa opção é apenas uma convenção; ela não protege os dados e dependemos do bom senso do desenvolvedor que usará o nosso código.