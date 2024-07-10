// Declarar, criar e inicializar um array em JavaScript é realmente 
// simples, conforme mostra o código a seguir:
let daysOfWeek = new Array();
daysOfWeek = new Array(7);
daysOfWeek = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

let daysOfWeek2 = [];

// Também podemos inicializar o array com alguns elementos, assim:
let daysOfWeek3 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Se quisermos saber quantos elementos há no array (o seu tamanho),
// podemos usar a propriedade length. O código a seguir exibirá 7 como saída:
console.log(daysOfWeek.length)