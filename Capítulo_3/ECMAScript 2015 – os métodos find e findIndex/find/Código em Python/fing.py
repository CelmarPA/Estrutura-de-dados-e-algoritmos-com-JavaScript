# Array de número naturais
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

def multiple_of_13(element):
    return element % 13 == 0


# Em Python, você pode usar a função filter juntamente com uma função de callback para realizar uma operação semelhante à função find do JavaScript. 
result = next(filter(multiple_of_13, numbers), None)
print(result)