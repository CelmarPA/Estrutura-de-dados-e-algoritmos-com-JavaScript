# Função para verificar se um número é múltiplo de 2
isEven = lambda x: x % 2 == 0

# Array de número naturais
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

# Em Python não existe o método copyWithin, no entanto, você pode alcançar resultados semelhantes em Python usando técnicas como fatiamento de listas.

# Usando Fatiamento de Listas
copyArray = [1, 2, 3, 4, 5, 6]
copyArray[0:3] = copyArray[3:]

print(copyArray)