// Os templates literais são um recurso interessante, pois podemos criar strings sem a necessidade de concatenar os valores.

const book = {
    name: "Learning JavaScript DataStructures and Algorithms",
};
console.log(
    "You are reading " +
        book.name +
        "., \n and this is a new line \n and so is this."
);

// Podemos melhorar a sintaxe da saída do console.log anterior com o código a seguir:
console.log(`You are reading ${book.name}.,
    and this is a new line
        and so is this.`);
