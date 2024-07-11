def printMatrix(array):
    for i in range(len(array)):
        row = ""
        for j in range(len(array[i])):
            row += str(array[i][j]) + " "
        print(row)

averageTemp = []
averageTemp.append([72, 75, 79, 79, 81, 81])
averageTemp.append([81, 79, 75, 75, 73, 73])

printMatrix(averageTemp)