# Algoritmo knap_sack_recursive:
def knap_sack_recursive(capacity, weights, values, n):
    if n == 0 or capacity == 0:
        return 0
    if weights[n - 1] > capacity:
        return knap_sack_recursive(capacity, weights, values, n - 1)
    
    a = values[n - 1] + knap_sack_recursive(capacity - weights[n - 1], weights, values, n - 1)
    b = knap_sack_recursive(capacity, weights, values, n - 1)
    return a if a > b else b

# Testando o algoritmo knapSackRecursive:
values = [3,4,5]
weights = [2,3,4]
capacity = 5
n = len(values)
print(knap_sack_recursive(capacity, weights, values, n)) # exibe 7
