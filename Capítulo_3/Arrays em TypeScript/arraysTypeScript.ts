// Por causa da inferência de tipo, o TypeScript entende que a declaração do array numbers é igual a const numbers: number[]. Por esse motivo, não precisamos sempre declarar explicitamente o tipo da variável se ela for inicializada em sua declaração.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Se retomarmos o exemplo de ordenação do array friends, poderemos refatorar o código para o TypeScript a seguir:
interface Person {
    name: String;
    age: Number;
}

//  const friends: {name: string, age: number}[];
const friends: Person[] = [
    { name: "John", age: 30 },
    { name: "Ana", age: 20 },
    { name: "Chris", age: 25 }
];

function comparePerson(a: Person, b: Person) {
    if (a.age < b.age) {
        return -1;
    } else if (a.age > b.age) {
        return 1;
    } else {
        return 0;
    }
}

/*
 Em suma, se quisermos atribuir um tipo a nossas variáveis JavaScript usando TypeScript, basta usar const ou let variableName: <type>[]; por outro lado, se usarmos arquivos com uma extensão .js, poderemos também ter verificação de tipos adicionando o comentário // @ts-check na primeira linha do arquivo JavaScript
*/