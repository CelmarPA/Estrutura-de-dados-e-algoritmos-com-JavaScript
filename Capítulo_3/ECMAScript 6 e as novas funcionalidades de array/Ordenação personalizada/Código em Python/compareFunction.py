friends = [
    { "name": "John", "age": 30 },
    { "name": "Ana", "age": 20 },
    { "name": "Chris", "age": 25 }
]

def get_age(person):
    return person["age"]

# Em Python para se utilizar a função de comparação em vez de sort usa-se sorted contudo este método so aceita apenas um argumento
print(sorted(friends, key = get_age))