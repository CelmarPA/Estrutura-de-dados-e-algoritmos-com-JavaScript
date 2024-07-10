// Quando trabalhamos com TypeScript, é muito comum ver um código como este:
// let age: number = 20;
// let existsFlag: boolean = true;
// let language: string = "JavaScript";

// O TypeScript tem inferência de tipos, o que significa que ele verificará e aplicará um tipo a uma variável automaticamente, com base no valor atribuído a ela. Vamos reescrever o código anterior com uma sintaxe mais limpa:
let age = 20; // number
let existsFlag = true; // boolean
let language = "JavaScript"; // string

// Quando devemos atribuir um tipo a uma variável? Se declararmos a
// variável e não a inicializarmos com um valor, é recomendável 
// atribuir-lhe um tipo, como mostra o código a seguir:
let favoriteLanguage: string;
let langs = ["JavaScript", "Ruby", "Python"];
favoriteLanguage = langs[0];
