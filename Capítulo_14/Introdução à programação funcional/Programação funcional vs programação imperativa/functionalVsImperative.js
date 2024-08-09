// Programação imperativa:
const printArray = function (array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
};
printArray([1, 2, 3, 4, 5]);

// Programação funcional:
const forEach = function (array, action) {
    for (var i = 0; i < array.length; i++) {
        action(array[i]);
    }
};

const logItem = function (item) {
    console.log(item);
};

forEach([1, 2, 3, 4, 5], logItem);

// Sintaxe da ES2015:
const forEach_ = (array, action) => array.forEach(item => action(item));
const logItem_ = (item) => console.log(item);

forEach_([1, 2, 3, 4, 5], logItem_);