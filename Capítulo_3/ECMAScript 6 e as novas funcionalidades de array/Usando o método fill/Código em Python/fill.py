# Função para verificar se um número é múltiplo de 2
isEven = lambda x: x % 2 == 0

# Array de número naturais
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

# Em Python, não há um método fill() diretamente associado a listas (arrays) como há em JavaScript. No entanto, em Python, você pode alcançar resultados semelhantes usando outras técnicas.

# Usando Compreensão de Lista:
# Criando uma array com 5 elementos, todos inicializados com o valor 0
zeros = [0 for _ in range(5)]

print(zeros)

# Usando o Método extend()
#Preencher uma lista existente com o valor 1
ones = []
ones.extend([1] * 5)

print(ones)
