
# Usaremos os dois conjuntos a seguir em nossos exemplos:
setA = set()
setA.add(1)
setA.add(2)
setA.add(3)
setB = set()
setB.add(2)
setB.add(3)
setB.add(4)

# Union
print({ *setA, *setB }) #  {1, 2, 3, 4}

# Intersection
print({ x for x in {*setA} if x in {*setB} }) # {2, 3}

# Difference
print({x for x in {*setA} if x not in {*setB}}) # {1}


# Também é possível realizar essa operacções com os operadores: |, & e -
# Union
# Usando o operador |
print(setA | setB) #  {1, 2, 3, 4}

# Intersection
# Usando o operador &
print(setA & setB) # {2, 3}

# Difference
# Usando o operador -
print(setA - setB) # {1}
