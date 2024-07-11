# Função para verificar se um número é múltiplo de 2
isEven = lambda x: x % 2 == 0

# Array de número naturais
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

# Em Python, não existe um método equivalente ao forEach como em JavaScript. No entanto, Python oferece outras maneiras de iterar sobre os elementos de uma lista (ou qualquer iterável) e aplicar uma função a cada elemento.

# For loop:
for num in numbers:
    print(isEven(num))

# Função Map:
print(list(map(isEven, numbers)))
