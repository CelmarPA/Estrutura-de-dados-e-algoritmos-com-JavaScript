"""
Aqui está uma tabela resumindo alguns dos códigos de tipo mais comuns utilizados no módulo array do Python:

        b: Inteiro de 8 bits (signed char)
        B: Inteiro de 8 bits (unsigned char)
        h: Inteiro de 16 bits (signed short)
        H: Inteiro de 16 bits (unsigned short)
        i: Inteiro de 32 bits (signed int)
        I: Inteiro de 32 bits (unsigned int)
        l: Inteiro de 32 bits (signed long)
        L: Inteiro de 32 bits (unsigned long)
        f: Ponto flutuante de 32 bits (float)
        d: Ponto flutuante de 64 bits (double)

"""

# Importar a biblioteca array
import array

# Definir o tamanho do array
length = 5

# Criando um array de inteiros de 16 bits
int16 = array.array('h', [0] * length)

# Criando uma lista / array
array16 = [0] * length

# Preencher os arrays com números de 1 a 5
for i in range(length):
    int16[i] = i + 1
    array16[i] = i + 1
    
# Imprimindo os arrays
print(int16)
print(array16)