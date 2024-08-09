# Com a função map, podemos transformar ou mapear uma coleção de dados para outra coleção de dados. Vamos observar um exemplo que usa a programação imperativa:

day_of_week = [
    {"name": "Monday", "value": 1},
    {"name": "Tuesday", "value": 2},
    {"name": "Wednesday", "value": 7}
] 

days_of_week_values_ = []
for i in range(len(day_of_week)):
    days_of_week_values_.append(day_of_week[i]["value"])

print(days_of_week_values_)

# Vamos agora considerar o mesmo exemplo usando a programação funcional, da seguinte maneira:
days_of_week_values = map(lambda day: day["value"], day_of_week)

print(list(days_of_week_values))

# Com a função filter, podemos filtrar valores de uma coleção. Vamos considerar um exemplo:
def positive_number_(array):
    positive = []
    for i in range(len(array)):
        if array[i] >= 0:
            positive.append(array[i])

    return positive

print(positive_number_([-1, 1, 2, -2]))

# Podemos escrever o mesmo código usando o paradigma funcional, assim:
def positive_numbers(array):
    return list(filter(lambda num: num >= 0, array))

print(positive_numbers([-1, 1, 2, -2]))

# Além disso, com a função reduce, podemos reduzir uma coleção a um valor específico. Por exemplo, vamos observar como podemos somar os valores de um array:
def sum_values(array):
    total = array[0]
    for i in range(1, len(array)):
        total += array[i]
    
    return total

print(sum_values([1, 2, 3, 4, 5]))

# Também podemos escrever o código anterior assim:
from functools import reduce
def sum_(array):
    return reduce(lambda a, b: a + b, array)

print(sum_([1, 2, 3, 4, 5]))

# Vamos analisar outro exemplo. Suponha que tenhamos de escrever uma função para concatenar vários arrays. Para isso, podemos criar outro array que conterá todos os elementos dos demais arrays. O código a seguir pode ser executado usando o paradigma imperativo.
def merge_arrays(arrays):
    new_array = []
    for array in arrays:
        for item in array:
            new_array.append(item)

    return new_array

print(merge_arrays([[1, 2, 3], [4, 5], [6]]))

# Nesse exemplo, observe que declaramos variáveis e usamos laços. Vamos agora executar o código implementado antes usando a programação funcional em JavaScript, assim:
def merge_arrays_concat(arrays):
    return reduce(lambda p, n: p + n, arrays)

print(merge_arrays_concat([[1, 2, 3], [4, 5], [6]]))

# Podemos também simplificar mais ainda o código, como vemos no código a seguir.
merge_arrays = lambda *arrays: sum(*arrays, [])
print(merge_arrays([[1, 2, 3], [4, 5], [6]]))
