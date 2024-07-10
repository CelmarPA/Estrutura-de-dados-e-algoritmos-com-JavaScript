let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers[numbers.length] = 10;
numbers.push(11);
numbers.push(12, 13);

Array.prototype.insertFisrtPosition =  function(value) {
    for (let i = this.length; i >=0; i--) {
        this[i] = this[i - 1];
    }
    this[0] = value;
}
numbers.insertFisrtPosition(-1);

console.log(numbers)
