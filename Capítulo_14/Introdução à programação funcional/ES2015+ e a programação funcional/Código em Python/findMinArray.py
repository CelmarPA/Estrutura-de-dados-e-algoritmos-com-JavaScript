# Programação imperativa:
def find_min_array(array):
    min_value = array[0]
    for i in range(1, len(array)):
        if min_value > array[i]:
            min_value = array[i]

    return min_value

print(find_min_array([8, 6, 4, 5, 9])) # exibe 4

# Programação funcional:
def min_(array):
    return min(*array)

print(min_([8, 6, 4, 5, 9])) # exibe 4

# Funções lambda:
min_value = lambda arr: min(arr)
print(min_value([8, 6, 4, 5, 9])) # exibe 4