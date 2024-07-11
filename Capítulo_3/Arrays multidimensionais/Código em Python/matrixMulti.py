matrix3x3x3 = []
for i in range(0, 3): # Linha
    matrix3x3x3.append([])
    for j in range(0, 3): # Coluna
        matrix3x3x3[i].append([]) # Profundidade
        for z in range(0, 3):
            matrix3x3x3[i][j].append(i + j + z)

# Imprime o conteúdo da matriz
def printMatrix3x3x3(matrix):
    for i in range(len(matrix)):
        print(f"Camada {i}:")
        for j in range(len(matrix[i])):
            row = ""
            for z in range(len(matrix3x3x3[i][j])):
                row += str(matrix3x3x3[i][j][z]) + " "
            print(row)
        print("")

printMatrix3x3x3(matrix3x3x3)