# Array de número naturais
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

def multiple_of_13(element):
    return element % 13 == 0

# Em Python você pode utilizar a função index com filter diretamente em uma lista para encontrar o índice do primeiro elemento que satisfaça uma condição específica. 

# Encontrar o índice do primeiro elemento que satisfaça a condição
try:
    index = numbers.index(next(filter(multiple_of_13, numbers)))
except ValueError:
    index = -1

print(index)
