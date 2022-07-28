//  Resolução do Exercício 3

const arrayNum = [13,44,9,8,38,19,5,2]
const arrayString = ["Coxinha", "Quibe", "Esfiha", "Bolinho de Carne"]
const arrayMisto = [13,44,9,"Coxinha", "Quibe", "Esfiha", true, true, false]

//  a)

const arrayNumCopia = arrayNum.slice()
const arrayStringCopia = arrayString.slice()
const arrayMistoCopia = arrayMisto.slice()

//  b)

arrayNumCopia.push(18)
console.log (arrayNum)
console.log (arrayNumCopia)

//  c)

arrayStringCopia.pop()
console.log (arrayString)
console.log (arrayStringCopia)

//  d)

arrayMistoCopia.splice(1,1)
console.log (arrayMisto)
console.log (arrayMistoCopia)