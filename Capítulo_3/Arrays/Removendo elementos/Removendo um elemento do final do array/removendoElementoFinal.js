let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.push(10);
numbers.push(11, 12);

Array.prototype.insertFisrtPosition = function (value) {
    for (let i = this.length; i >= 0; i--) {
        this[i] = this[i - 1];
    }
    this[0] = value;
};
numbers.insertFisrtPosition(-1);

numbers.unshift(-2); 
numbers.unshift(-4, -3);

// Para remover um valor do final de um array, podemos utilizar o método pop:
numbers.pop()

console.log(numbers);
