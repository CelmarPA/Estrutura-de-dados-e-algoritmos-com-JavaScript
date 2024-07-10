numbers = [-4, -3, -2, -1, 0, 1, 2, 3,  4,  5,  6, 7, 8, 9, 10, 11, 12]
numbers.append(10)
numbers.append(11)
numbers.append(12)
numbers.append(13)

def remove_fist_position(array):
    del array[0] # remove o primeiro elemento do array
remove_fist_position(numbers) 

print(numbers) # Imprime o array

# Ou pode=-se usar:
numbers = numbers[1:] # A operação de fatiamento pode ser usada para criar uma nova lista sem o primeiro elemento
print(numbers)

# Ou então:
numbers.pop(0)
print(numbers)