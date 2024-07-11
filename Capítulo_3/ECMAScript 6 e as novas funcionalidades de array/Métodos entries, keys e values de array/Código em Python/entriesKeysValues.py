# Função para verificar se um número é múltiplo de 2
isEven = lambda x: x % 2 == 0

# Array de número naturais
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

# Equivalente de entries em Python usando enumerate():
for keys, value in enumerate(numbers):
    print(keys, value)
print("\n")

# Equivalente de keys em Python usando for in:
for keys in range(len(numbers)):
    print(keys)
print("\n")

# Equivalente de values em Python usando for in:
for values in numbers:
    print(values)