from functools import reduce
# Função para verificar se um número é múltiplo de 2
isEven = lambda x: x % 2 == 0

# Array de número naturais
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

# Função reduce
soma = reduce((lambda x, y: x + y), numbers)

print(soma)