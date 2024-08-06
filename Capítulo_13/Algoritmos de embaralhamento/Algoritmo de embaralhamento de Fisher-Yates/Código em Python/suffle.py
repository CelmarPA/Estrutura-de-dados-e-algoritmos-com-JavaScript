# Funtion swap
def swap(array, a, b):
    """ temp = array[a]
    array[a] = array[b]
    array[b] = temp """ # Classic Mode
    array[a], array[b] = array[b], array[a] # Idiomatic Mode

# Importação de bibliotecas
from math import floor
from random import randint
# Algoritmo de embaralhamento de Fisher-Yates:
def suffle(array):
    for i in range(len(array) - 1, -1, -1):
        random = floor(randint(0, i))
        swap(array, i, random)
    return array

# Testando o algoritmo de Fisher-Yates:
array = [1, 2, 3, 4, 5]
print(", ".join(map(str, array)))
array = suffle(array)
print(", ".join(map(str, array)))
