let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers[numbers.length] = 10;
numbers.push(11);
numbers.push(12, 13);

Array.prototype.insertFisrtPosition = function (value) {
    for (let i = this.length; i >= 0; i--) {
        this[i] = this[i - 1];
    }
    this[0] = value;
};
numbers.insertFisrtPosition(-1);

numbers.unshift(-2); 
numbers.unshift(-4, -3);

// Para remover um valor do início do array, podemos usar o código a seguir:
// for (let i = 0; i < numbers.length; i++) {
//     numbers[i] = numbers[i + 1]
// }

// Para remover o valor do array, podemos também criar um método removeFirstPosition

Array.prototype.reIndex = function(myArray) {
    const newArray = [];
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] !== undefined) {
            // console.log(myArray[i]);
            newArray.push(newArray[i]);
        }
    }
    return myArray;
}

// remove a primeira posição manualmente e executa reIndex
Array.prototype.removeFirstPosition = function() {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
    }
    return this.reIndex(this);
}
numbers = numbers.removeFirstPosition();

console.log(numbers);
