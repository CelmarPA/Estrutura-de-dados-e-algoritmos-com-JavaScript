set = set()
set.add(1)
print(set); # {1}
print(1 in set); # true
print(len(set)); # 1
set.remove(1)
print(len(set)); # 0
set.add(1)
set.add(2)
set.add(3)
set.add(4)
set.add(5)
print(set); # {1, 2, 3, 4, 5}
set.clear()
print(len(set)); # 0