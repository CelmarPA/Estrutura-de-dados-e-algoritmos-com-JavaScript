# Array de número naturais
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

# Em Python, você pode usar o método .rindex() em listas para encontrar o índice da última ocorrência de um elemento específico.
numbers.append(10)

# Não existe métdo similar para lastIndexOf em Python, o que pode ser feito é definir um função para encontra esse índice
def last_index_of(array, value):
    try:
        # [::-1]: Inverte a lista numbers.
        # .index(value): Encontra o índice da primeira ocorrência de value na lista invertida.
        # len(array) - index - 1: Calcula o índice correspondente na lista original.
        return len(array) - array[::-1].index(value) - 1
    except ValueError:
        return -1
    
print(last_index_of(numbers, 10))  # Saída: 15
print(last_index_of(numbers, 100))  # Saída: -1
