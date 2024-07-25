def factorial_iterative(number):
    if number < 0:
        return None
    
    total = 1
    for n in range(number, 1, -1):
        total = total * n
    
    return total

print(factorial_iterative(5)) # 120