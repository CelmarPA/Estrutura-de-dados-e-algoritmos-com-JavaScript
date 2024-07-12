names = ["Ana", "ana", "john", "John"]
names.sort()

print(names) # ['Ana', 'John', 'ana', 'john']

# Usando sorted
names = ["Ana", "ana", "john", "John"]
sorted(names)
print(names) # ['Ana', 'ana', 'john', 'John']

# Se você precisar de uma ordenação que ignore diferenças de maiúsculas/minúsculas (ordem case insensitive), você pode usar o parâmetro key=locale.strxfrm com a função sorted() ou list.sort(), conforme mostrado abaixo:
import locale
# Definindo a localização padrão (você pode ajustar para o seu idioma)
locale.setlocale(locale.LC_ALL, 'en_US.UTF-8')

names = ["Ana", "ana", "john", "John"]

# Ordenando com base na localização padrão
sorted_names = sorted(names, key = locale.strxfrm)

print(sorted_names)

# Para caracteres com acento, também podemos usar esse método
names2 = ['Maève', 'Maeve']
sorted_names2 = sorted(names2, key = locale.strxfrm)
print(sorted_names2)