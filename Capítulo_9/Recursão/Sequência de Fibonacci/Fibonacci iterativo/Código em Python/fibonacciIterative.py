def fibonacci_iterative(n):
    if n < 1: return 0
    if n <= 2: return 1
    
    fib_minus_2 = 0
    fib_minus_1 = 1
    fib_n = n

    for i in range(2, n + 1):
        fib_n = fib_minus_1 + fib_minus_2
        fib_minus_2 = fib_minus_1
        fib_minus_1 = fib_n

    return fib_n

print(fibonacci_iterative(10)) # 55
