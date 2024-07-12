//Função para verificar se um número é múltiplo de 2
const isEven = (x) => x % 2 === 0;

// Array de número naturais
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// copyWithin -> copia uma sequência de valores do array para a  posição de um índice de início.

let copyArray = [1, 2, 3, 4, 5, 6];

// Vamos supor agora que queremos copiar os valores 4, 5 e 6 para as primeiras três posições do array, resultando no array [4,5,6,4,5,6]. Podemos usar o código a seguir para obter esse resultado:
copyArray.copyWithin(0, 3);

console.log(copyArray);

//Considere agora que queremos copiar os valores 4 e 5 (as posições 3 e 4) para as posições 1 e 2. Podemos usar o seguinte código para isso:
copyArray = [1, 2, 3, 4, 5, 6];
copyArray.copyWithin(1, 3, 5);

console.log(copyArray);

// Nesse caso, copiaremos os elementos, partindo da posição 3 até a posição 5 (não inclusivo), para a posição 1 do array, resultando no array [1,4,5,4,5,6].