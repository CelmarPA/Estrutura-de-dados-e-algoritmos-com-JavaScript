# Usaremos os dois conjuntos a seguir em nossos exemplos:
setA = set()
setA.add(1)
setA.add(2)
setA.add(3)
setB = set()
setB.add(2)
setB.add(3)
setB.add(4)

def difference(set1, set2):
    difference_set = set()
    for value in set1:
        if value not in set2:
            difference_set.add(value)
    return difference_set

difference_result = difference(setA, setB)

print(difference_result) # { 1 }
