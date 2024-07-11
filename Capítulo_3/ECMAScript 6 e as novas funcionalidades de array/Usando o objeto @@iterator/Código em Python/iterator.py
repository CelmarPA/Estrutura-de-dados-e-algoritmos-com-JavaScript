# Função para verificar se um número é múltiplo de 2
isEven = lambda x: x % 2 == 0

# Array de número naturais
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

# Obtendo um iterador a partir do objeto iterável
iterator = iter(numbers)

# Iterando manualmente sobre o iterador usando next()
print(next(iterator))  # Output: 1
print(next(iterator))  # Output: 2

# Usando um laço for para iterar sobre o objeto iterável
for n in numbers:
    print(n)