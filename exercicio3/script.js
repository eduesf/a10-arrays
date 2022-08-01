//  Resolução do Exercício 3

const arrayNum = [13,44,9,8,38,19,5,2]
const arrayString = ["Coxinha", "Quibe", "Esfiha", "Bolinho de Carne"]
const arrayMisto = [13,44,9,"Coxinha", "Quibe", "Esfiha", true, true, false]

//  a)

const arrayNumCopia = arrayNum.slice()           // Fazendo cópias das arrays originais
const arrayStringCopia = arrayString.slice()
const arrayMistoCopia = arrayMisto.slice()

//  b)

arrayNumCopia.push(18)          // Adicionando um item no fim da array copiada
console.log (arrayNum, "Array Original")
console.log (arrayNumCopia, "Array Cópia")

//  c)

arrayStringCopia.pop()          // Retirando o último Item da array copiada
console.log (arrayString, "Array Original")
console.log (arrayStringCopia, "Array Cópia")

//  d)

arrayMistoCopia.splice(1,1)     // Retirando o segundo item da array copiada
console.log (arrayMisto, "Array Original")
console.log (arrayMistoCopia, "Array Cópia")