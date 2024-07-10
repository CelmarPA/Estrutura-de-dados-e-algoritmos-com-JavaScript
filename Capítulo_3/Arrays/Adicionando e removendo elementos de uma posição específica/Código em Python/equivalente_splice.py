numbers = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

# Remover 3 elementos a partir do índice 5 (equivalente a `numbers.splice(5, 3)` em JavaScript)
del numbers[5:8]

print(numbers)

# Inserir [1, 2, 3] no índice 5 (equivalente a `numbers.splice(5, 0, 1, 2, 3)` em JavaScript)
numbers[5:5] = [1,2,3]

print(numbers)

# Remover 3 elementos a partir do índice 5 e inserir [1, 2, 3] (equivalente a `numbers.splice(5, 3, 1, 2, 3)` em JavaScript)
numbers[5:8] = [1, 2, 3]

print(numbers)