# Usaremos os dois conjuntos a seguir em nossos exemplos:
setA = set()
setA.add(1)
setA.add(2)
setA.add(3)
setB = set()
setB.add(2)
setB.add(3)
setB.add(4)

def intersection(set1, set2):
    intersection_set = set()
    for value in set1:
        if value in set2:
            intersection_set.add(value)
    return intersection_set

intersection = intersection(setA, setB)

print(intersection) # { 2, 3 }
