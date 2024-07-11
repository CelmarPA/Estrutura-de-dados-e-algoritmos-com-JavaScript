def isEven(x):
    # Retorn true se x for múltiplo de 2
    print(x)
    return True if x % 2 == 0 else False

# Podemos reescrever a função isEven usando lambda:
isEven = lambda x: x % 2 == 0

print(isEven(2))