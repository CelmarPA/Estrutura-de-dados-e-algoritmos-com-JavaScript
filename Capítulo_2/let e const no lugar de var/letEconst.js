let language = "JavaScript!";
// let language = "Ruby!"; // lança um erro
console.log(language);

const PI = 3.141593;
// PI = 3.0; // lança um erro
console.log(PI);

const jsFramework = {
    name: "Angular"
};

jsFramework.name = "React";


// erro, não é possível atribuir outra referência ao objeto
jsFramework = {
    name: 'Vue'
    };