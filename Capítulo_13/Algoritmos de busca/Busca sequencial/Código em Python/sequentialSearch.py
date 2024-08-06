# Função defaultEquals
def default_equals(a, b):
    return a == b

# Variável DOES_NOT_EXIST
DOES_NOT_EXIST = -1

# Algoritmo sequential search
def sequential_search(array, value, equalsFn = default_equals):
    for i in range(len(array)):
        if equalsFn(value, array[i]):
            return i
    
    return DOES_NOT_EXIST

# Testando algortimo sequential_search
array = [5, 4, 3, 2, 1]

print(sequential_search(array, 3)) # 2