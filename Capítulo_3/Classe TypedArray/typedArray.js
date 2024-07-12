// Podemos armazenar qualquer tipo de dado em arrays JavaScript. Isso se deve ao fato de os arrays JavaScript não serem fortemente tipados como em outras linguagens como C e Java.

/*
 TypedArray foi criado para que pudéssemos trabalhar com arrays
 contendo um único tipo de dado. A sua sintaxe é let myArray = new
 TypedArray(length), em que TypedArray deve ser substituído por uma
 classe TypedArray, conforme especificado na tabela a seguir:

    TypedArray                 Descrição
    Int8Array               Inteiro de 8 bits com sinal, usando complemento de dois
    Uint8Array              Inteiro de 8 bits sem sinal
    Uint8ClampedArray       Inteiro de 8 bits sem sinal
    Int16Array              Inteiro de 16-bits com sinal, usando complemento de dois
    Uint16Array             Inteiro de 16 bits sem sinal
    Int32Array              Inteiro de 32-bits com sinal, usando complemento de dois
    Uint32Array             Inteiro de 32 bits sem sinal
    Float32Array            Número de ponto flutuante padrão IEEE com 32 bits
    Float64Array            Número de ponto flutuante padrão IEEE com 64 bits
*/

// Eis um exemplo:
let length = 5; // Definindo o tamanho do array
let int16 = new Int16Array(length); // Criando um array de inteiros de 16 bits
let array16 = []; // Criando uma lista / array
array16.length = length; // Definindo o tamanho do array16

for (let i = 0; i < length; i++) {
    // Preencher os arrays com números de 1 a 5
    int16[i] = i + 1;
    array16[i] = i + 1;
    9;
}

// Imprimindo os arrays
console.log(int16);
console.log(array16);
