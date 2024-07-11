# Em Python para funcionar todos os elementos devem ser arrays
zero = [0]
positiveNumbers = [1, 2 , 3]
negativeNumbers = [-3, -2, -1]
numbers = negativeNumbers + zero + positiveNumbers

print(numbers)

# O método extend pode ser usando para gerar esse resultado
zero = [0]
positiveNumbers = [1, 2 , 3]
negativeNumbers = [-3, -2, -1]
numbers = []
numbers.extend(negativeNumbers)
numbers.extend(zero)
numbers.extend(positiveNumbers)
print(numbers)