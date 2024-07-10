fibonacci = [0, 1, 1]
for i in range(3, 20):
    proximo_numero = fibonacci[i - 1] + fibonacci[i - 2]
    fibonacci.append(proximo_numero)

for i in fibonacci:
    print(i)

# OU:
for i in range(len(fibonacci)):
    print(fibonacci[i])

print(fibonacci)