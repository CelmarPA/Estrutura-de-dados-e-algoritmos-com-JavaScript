const matrix3x3x3 = [];
for (let i = 0; i < 3; i++) { // Linha
    matrix3x3x3[i] = []; // precisamos inicializar cada array
    for (let j = 0; j < 3; j ++) { // Coluna
        matrix3x3x3[i][j] = [];
        for (let z = 0; z < 3; z++) { // Profundidade
            matrix3x3x3[i][j][z] = i + j + z;
        }
    }
}
console.log(matrix3x3x3);

// Imprime o conteúdo da matriz
function printMatrix3x3x3(matrix){
    for (let i = 0; i < matrix.length; i++) {
        console.log(`Camada ${i}:`);
        for (let j = 0; j < matrix[i].length; j++) {
            let row = ""
            for (let z = 0; z < matrix[i][j].length; z++) {
                row += matrix[i][j][z] + " ";
            }
            console.log(row);
        }
        console.log("");
    }
}

printMatrix3x3x3(matrix3x3x3)