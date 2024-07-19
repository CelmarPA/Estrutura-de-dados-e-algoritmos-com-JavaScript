# Usaremos os dois conjuntos a seguir em nossos exemplos:
setA = set()
setA.add(1)
setA.add(2)
setA.add(3)
setB = set()
setB.add(2)
setB.add(3)
setB.add(4)

def union(set1, set2):
    union_ab = set()
    for value in set1:
        union_ab.add(value)
    for value in set2:
        union_ab.add(value)
    return union_ab

union_set = union(setA, setB)

print(union_set)  # {1, 2, 3, 4, 5}