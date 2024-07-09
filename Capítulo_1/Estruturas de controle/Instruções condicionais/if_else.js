var num = 0;
if (num === 1) {
    console.log('num is equal to 1');
} else {
    console.log("num is not equal to 1, the value of num is " + num);
}

// A instrução if...else também pode ser representada por um operador ternário

if (num === 1) {
    num--;
} else {
    num ++;
}

// Essa instrução também pode ser representada assim:
(num === 1) ? num-- : num++;

