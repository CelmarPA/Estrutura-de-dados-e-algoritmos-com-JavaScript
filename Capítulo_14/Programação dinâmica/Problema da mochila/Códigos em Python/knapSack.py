# Algoritmo knap_sack:
def knap_sack(capacity, weights, values, n):
    ks = [[0 for _ in range(capacity + 1)] for _ in range(n + 1)] # Inicialização da variável ks  
    for i in range(n + 1):
        for w in range(capacity + 1):
            if i == 0 or w == 0:
                ks[i][w] = 0
            elif weights[i - 1] <= w:
                a = values[i - 1] + ks[i - 1][w - weights[i - 1]]
                b = ks[i - 1][w]
                ks[i][w] = a if a > b else b
            else:
                ks[i][w] = ks[i - 1][w]
    find_values(n, capacity, ks, weights, values)
    return f"Total value that can be carried: {ks[n][capacity]}"

# Função find_values
def find_values(n, capacity, ks, weights, values):
    i = n
    k = capacity
    print(f"Items that are part of the solution:")
    while i > 0 and k > 0:
        if ks[i][k] != ks[i - 1][k]:
            print(f"item {i} can be part of solution w,v: {weights[i - 1]}, {values[i - i]}")
            i -= 1
            k -= ks[i][k]
        else:
            i -= 1

# Testando o algoritmo knap_sack:
values = [3,4,5]
weights = [2,3,4]
capacity = 5
n = len(values)
print(knap_sack(capacity, weights, values, n)) # exibe 7