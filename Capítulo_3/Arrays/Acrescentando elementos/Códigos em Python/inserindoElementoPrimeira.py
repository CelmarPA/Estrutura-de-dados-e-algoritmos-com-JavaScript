numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers.append(10)
numbers.append(11)
numbers.append(12)
numbers.append(13)

def insert_fist_position(array, valor):
    array.insert(0, valor)  # Insere o valor na posição 0 (início no array)

insert_fist_position(numbers, -1) # Chama a função para inserir -1 na primeira posição do array `numbers`

print(numbers) # Imprime o array