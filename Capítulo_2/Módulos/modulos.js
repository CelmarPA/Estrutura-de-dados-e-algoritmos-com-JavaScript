import { circleArea, squareArea } from "./Calculo de áreas/CalcArea.js";

console.log(circleArea(2));
console.log(squareArea(2));

// Há também a opção de usar o membro exportado com um nome diferente
// quando fazemos a importação, assim:
// import { circleArea as circle } from './Calculo de áreas/CalcArea.js';

// Há também algumas formas diferentes para importar as funções em um
// módulo distinto:
import * as area from "./Calculo de áreas/CalcArea.js";
console.log(area.circleArea(2));
console.log(area.squareArea(2));

// Para importar uma classe em um módulo diferente, use o código a seguir:
import Book from "./Calculo de áreas/CalcArea.js";
const myBook = new Book("some title");
myBook.printTitle();

// Observe que, nesse caso, não precisamos usar chaves ({}) em torno do
// nome da classe. Só usamos chaves se o módulo tiver mais de um membro
// exportado.