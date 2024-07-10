let r = 2;

// Vamos usar a fórmula para calcular a área de um círculo como exemplo:
var area = 3.14 * r * r;

// Poderíamos usar também a função Math.pow para escrever o mesmo código:
var area = 3.14 * Math.pow(r, 2);

// A ES2016 introduziu o operador **, concebido para ser o novo operador de exponencial:
var area = 3.14 * r ** 2;

console.log(area);
