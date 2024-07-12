let names = ["Ana", "ana", "john", "John"];
console.log(names.sort()); // ["Ana", "John", "ana", "john"]

/*
 Por que ana vem depois de John se “a” vem antes no alfabeto? Isso ocorre porque o JavaScript compara os caracteres de acordo com o seu valor ASCII. Por exemplo, A, J, a e j têm os seguintes valores ASCII decimais: A: 65, J: 74, a: 97 e j: 106.
 */

/**
 Porém, se passarmos uma compareFunction contendo o código para ignorar a diferença entre letras maiúsculas e minúsculas, a saída obtida será ["Ana", "ana", "john", "John"], assim:
 */

names = ["Ana", "ana", "john", "John"]; // inicia o array com o estado original

console.log(
    names.sort((a, b) => {
        if (a.toLocaleLowerCase() < b.toLocaleLowerCase()) {
            return -1;
        } else if (a.toLocaleLowerCase() > b.toLocaleLowerCase()) {
            return 1;
        } else {
            return 0;
        }
    })
);

/**
 Nesse caso, a função sort não terá efeito algum; ela obedecerá à ordem atual das letras minúsculas e maiúsculas. Se quisermos que as letras minúsculas venham antes no array ordenado, é preciso usar o método localeCompare:
 */
names.sort((a, b) => a.localeCompare(b));
console.log(names); // ["ana", "Ana", "john", "John"].

// Para caracteres com acento, podemos usar o método localeCompare também:
const names2 = ['Maève', 'Maeve'];
console.log(names2.sort((a, b) => a.localeCompare(b))); // ["Maeve", "Maève"].