let numbers = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

numbers.splice(5, 3); // removerá três elementos a partir do índice 5 de nosso array

console.log(numbers);

// Assim como em arrays e objetos JavaScript, o operador delete também
// pode ser usado para remover um elemento de um array:
delete numbers[0];
// No entanto, a posição 0 do array terá o valor undefined, ou seja, será 
// o mesmo que executar numbers[0] = undefined, e teríamos de reindexar o array.
console.log(numbers);

// Vamos agora supor que queremos inserir os números de 1 a 3 de volta no 
// array a partir da posição 5. Podemos usar novamente o método splice para isso:
numbers.splice(5, 0, 1, 2, 3);

// O primeiro argumento do método é o índice a partir do qual queremos
// remover ou inserir elementos. O segundo argumento é a quantidade de
// elementos que queremos remover (nesse caso, não queremos remover
// nenhum, portanto passamos o valor 0 (zero)). Do terceiro argumento em
// diante, temos os valores que gostaríamos de inserir no array (os 
// elementos 2, 3 e 4). Os valores de -3 a 12 serão novamente exibidos na saída.

console.log(numbers);

// Por fim, execute o código a seguir:
numbers.splice(5, 3, 1, 2, 3);

// Os valores de -3 a 12 serão exibidos na saída. Isso ocorre porque
// removemos três elementos a partir do índice 5, mas também acrescentamos
// os elementos 2, 3 e 4 a partir do índice 5.

console.log(numbers);
