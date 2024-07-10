const circleArea = r => 3.14 * (r ** 2);
const squareArea = s => s * s;
export { circleArea, squareArea };

// Podemos renomear as funções quando elas forem exportadas:
// export { circleArea as circle, squareArea as square };

// Também é possível adicionar a palavra reservada export na frente de cada
// função ou variável que queremos expor. Não precisamos ter uma
// declaração export no final do arquivo:
// export const circleArea = r => 3.14 * (r ** 2);
// export const squareArea = s => s * s;

// Suponha que tivéssemos somente um único membro no módulo e
// quiséssemos exportá-lo. Poderíamos usar as palavras reservadas export
// default assim:
export default class Book {
    constructor(title) {
        this.title = title;
    }
    printTitle() {
        console.log(this.title);
    }
}
