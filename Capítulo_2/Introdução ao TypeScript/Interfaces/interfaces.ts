// Em TypeScript, há dois conceitos de interfaces. O primeiro está
// relacionado à atribuição de um tipo a uma variável. Considere o 
// código a seguir:
interface Person {
    name: string;
    age: number;
}
function printName(person: Person) {
    console.log(person.name);
}

const john = { name: "John", age: 21 };
const mary = { name: "Mary", age: 21, phone: "123-45678" };
printName(john);
printName(mary);