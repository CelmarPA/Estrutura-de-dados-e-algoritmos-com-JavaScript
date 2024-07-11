"""
Em Python, não existe uma função nativa chamada every diretamente equivalente àquela encontrada em JavaScript para arrays. 

No entanto, em Python, você pode usar a função all() em combinação com uma compreensão de lista para obter um comportamento semelhante. Aqui está como você pode fazer:

"""
# Função para verificar se um número é múltiplo de 2
isEven = lambda x: x % 2 == 0

# Array de número naturais
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

print(all(isEven(num) for num in numbers)) # Output: False (pois nem todos os números são pares)
