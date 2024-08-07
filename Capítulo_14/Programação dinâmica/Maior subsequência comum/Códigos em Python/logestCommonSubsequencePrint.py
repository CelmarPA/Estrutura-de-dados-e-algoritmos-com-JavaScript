# Algoritmo do lcs (Longest Common Subsequence, ou Maior Subsequência Comum)
def lcs(word_x, word_y):
    m = len(word_x)
    n = len(word_y)
    l = [[0 for _ in range(m + 1)] for _ in range(n + 1)] # Inicialização da matrix l
    solution = [["0" for _ in range(m + 1)] for _ in range (n + 1)] # Inicialização da matrix solution
    for i in range(m + 1):
        for j in range(n + 1):
            if i == 0 or j == 0:
                l[i][j] = 0
            elif word_x[i - 1] == word_y[j - 1]:
                l[i][j] = l[i - 1][j - 1] + 1
                solution[i][j] = "diagonal"
            else:
                a = l[i - 1][j]
                b = l[i][j - 1]
                l[i][j] = a if a > b else b # max(a, b)
                solution[i][j] = "top" if l[i][j] == l[i - 1][j] else "left"

    return l[m][n], print_solution(solution, word_x, m, n)

# Função print_solution:
def print_solution(solution, word_x, m, n):
    a = m
    b = n
    x = solution[a][b]
    answer = ""

    while x != "0":
        if solution[a][b] == "diagonal":
            answer = word_x[a - 1] + answer
            a -= 1
            b -= 1
        elif solution[a][b] == "left":
            b -= 1
        elif solution[a][b] == "top":
            a -= 1
        x = solution[a][b]
    
    # print(f"lcs: {answer}")
    return answer

# Testando algoritmo lcs
word_x = "acbaed"
word_y = "abcadf"

result = lcs(word_x, word_y)
print(f"A maior subsequência comum entre \"{word_x}\" e \"{word_y}\" tem comprimento: {result[0]} e lcs: {result[1]}") 
