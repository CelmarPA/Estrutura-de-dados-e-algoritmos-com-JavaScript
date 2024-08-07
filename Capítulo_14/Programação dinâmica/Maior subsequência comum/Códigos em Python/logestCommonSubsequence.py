# Algoritmo do lcs (Longest Common Subsequence, ou Maior Subsequência Comum)
def lcs(word_x, word_y):
    m = len(word_x)
    n = len(word_y)
    l = [[0 for _ in range(m + 1)] for _ in range(n + 1)] # Inicialização da matrix l
    for i in range(m + 1):
        for j in range(n + 1):
            if i == 0 or j == 0:
                l[i][j] = 0
            elif word_x[i - 1] == word_y[j - 1]:
                l[i][j] = l[i - 1][j - 1] + 1
            else:
                a = l[i - 1][j]
                b = l[i][j - 1]
                l[i][j] = a if a > b else b

    return l[m][n]

# Testando algoritmo lcs
word_x = "acbaed"
word_y = "abcadf"

result = lcs(word_x, word_y)

print(f"A maior subsequência comum entre \"{word_x}\" e \"{word_y}\" tem comprimento: {result}") # 4