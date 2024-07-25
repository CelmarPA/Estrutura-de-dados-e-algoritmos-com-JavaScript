def fibonacci_memoization():
    memo = [0, 1]
    
    def fibonacci(n):
        if n < len(memo):
            return memo[n]
        # Calcula o valor, armazena no cache e retorna
        while len(memo) <= n:
            memo.append(memo[-1] + memo[-2])
        return memo[n]
    
    return fibonacci

# Exemplo de uso
fibonacci = fibonacci_memoization()
print(fibonacci(10))  # Saída: 55
print(fibonacci(20))  # Saída: 6765
print(fibonacci(30))  # Saída: 832040