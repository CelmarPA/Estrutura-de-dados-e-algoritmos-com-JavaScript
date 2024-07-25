def factorial(n):
    if (n == 0 or n == 1): # caso base
        return 1
    return n * factorial(n - 1) # chamada recursiva

print(factorial(5))
