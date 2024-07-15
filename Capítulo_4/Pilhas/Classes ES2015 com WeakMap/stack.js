/*
 Há um tipo de dado que podemos usar para garantir que a propriedade seja private em uma classe, e ele se chama WeakMap. Exploraremos a estrutura de dados de mapa em detalhes no Capítulo 8, Dicionários e  hashes, mas, por enquanto, precisamos saber que um WeakMap é capaz de armazenar um par chave/valor, no qual a chave é um objeto e o valor pode ser um dado de qualquer tipo. Vamos ver como será a aparência da classe Stack se usarmos WeakMap para armazenar o atributo items (versão com array):
*/
const items = new WeakMap();
class Stack {
    constructor() {
        items.set(this, []);
    }
    push(element) {
        const s = items.get(this);
        s.push(element);
    }

    pop() {
        const s = items.get(this);
        const r = s.pop();
        return r;
    }
    // outros métodos
}

/*
 Agora sabemos que a propriedade items é realmente privada na classe Stack. Com essa abordagem, o código não é fácil de ler e não será possível herdar as propriedades que são private se estendermos essa classe; não podemos ter tudo!
*/