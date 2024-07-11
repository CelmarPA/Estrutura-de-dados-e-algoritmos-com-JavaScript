#  Em Python, para replicar a funcionalidade de Array.from() e aplicar uma função de mapeamento semelhante ao exemplo em JavaScript, você pode usar a função map() e list() para converter iteradores em listas.

# Função para verificar se um número é múltiplo de 2
isEven = lambda x: x % 2 == 0

# Array de número naturais
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

# Replicando Array.from() para criar uma cópia de numbers
number2 = list(numbers)
print(number2)

# Aplicando a função isEven usando map() para filtrar os números pares
evens = list(map(isEven, numbers))
print(evens)