// Algoritmo do lcs (Longest Common Subsequence, ou Maior Subsequência Comum) com resultado
function lcs(wordX, wordY) {
    const m = wordX.length;
    const n = wordY.length;
    const l = [];
    const solution = [];
    for (let i = 0; i <= m; i++) {
        l[i] = [];
        solution[i] = [];
        for (let j = 0; j <= n; j++) {
            l[i][j] = 0;
            solution[i][j] = "0";
        }
    }
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0 || j === 0) {
                l[i][j] = 0
            } else if (wordX[i - 1] === wordY[j - 1]) {
                l[i][j] = l[i - 1][j] + 1;
                solution[i][j] = "diagonal";
            } else {
                const a = l[i - 1][j];
                const b = l[i][j - 1];
                l[i][j] = a > b ? a : b; // max(a, b)
                solution[i][j] = l[i][j] === l[i - 1][j] ? "top" : "left";
            }
        }
    }
    return [l[m][n], printSolution(solution, wordX, m, n)]
}

// Função printSolution:
function printSolution(solution, wordX, m, n) {
    let a = m;
    let b = n;
    let x = solution[a][b];
    let answer = "";
    while (x !== "0") {
        if (solution[a][b] === "diagonal") {
            answer = wordX[a - 1] + answer;
            a--;
            b--;
        } else if (solution[a][b] === "left") {
            b--;
        } else if (solution[a][b] === "top") {
            a--;
        }
        x = solution[a][b];
    }
    // console.log("lcs: " + answer);
    return answer
}

// Testando algoritmo lcs
let wordX = "acbaed";
let wordY = "abcadf";
let result = lcs(wordX, wordY);

console.log(`A maior subsequência comum entre "${wordX}" e "${wordY}" tem comprimento: ${result[0]} e lcs: ${result[1]}`);
