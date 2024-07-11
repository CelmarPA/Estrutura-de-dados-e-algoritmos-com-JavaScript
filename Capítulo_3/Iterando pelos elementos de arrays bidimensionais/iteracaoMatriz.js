export function printMatrix(array) {
    for (let i = 0; i < array.length; i++) {
        let row = "";
        for (let j = 0; j < array[i].length; j++) {
            row += array[i][j] + " ";
        }
        console.log(row)
    }
}
