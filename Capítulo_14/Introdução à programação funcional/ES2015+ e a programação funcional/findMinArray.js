// Programação imperativa:
var findMinArray = function(array) {
    var minValue = array[0];
    for (var i = 1; i < array.length; i++) {
        if (minValue > array[i]) {
            minValue = array[i];
        }
    }
    return minValue;
};
console.log(findMinArray([8, 6, 4, 5, 9])); // exibe 4

// Programação funcional:
const min_ = function(array) {
    return Math.min(...array);
};
console.log(min_([8, 6, 4, 5, 9])); // exibe 4

// Funções de seta (arrow functions):
const min = arr => Math.min(...arr);
console.log(min([8, 6, 4, 5, 9])); // exibe 4
