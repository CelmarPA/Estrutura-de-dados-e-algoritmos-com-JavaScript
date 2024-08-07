// Algoritmo do lcs (Longest Common Subsequence, ou Maior Subsequência Comum)
function lcs(wordX, wordY) {
    const m = wordX.length;
    const n = wordY.length;
    const l = [];
    for (let i = 0; i <= m; i++) {
        l[i] = [];
        for (let j = 0; j <= n; j++) {
            l[i][j] = 0;
        }
    }
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0 || j === 0) {
                l[i][j] = 0;
            } else if (wordX[i - 1] === wordY[j - 1]) {
                l[i][j] = l[i - 1][j - 1] + 1;
            } else {
                const a = l[i - 1][j];
                const b = l[i][j - 1];
                l[i][j] = a > b ? a : b;
            }
        }
    }
    return l[m][n];
}

// Testando algoritmo lcs
let wordX = "acbaed";
let wordY = "abcadf";

const result = lcs(wordX, wordY);

console.log(`A maior subsequência comum entre "${wordX}" e "${wordY}" tem comprimento: ${result}`); // 4