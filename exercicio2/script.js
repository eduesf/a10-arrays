// Resolução do Exercício 2

// a)

const arrayNum = [13,44,9,8,38,19,5,2]
const arrayString = ["Coxinha", "Quibe", "Esfiha", "Bolinho de Carne"]
const arrayMisto = [13,44,9,"Coxinha", "Quibe", "Esfiha", true, true, false]

console.log ("A array tem",arrayNum.length, "itens")             // Contando quantos itens possuem cada array
console.log ("A array tem",arrayString.length, "itens")
console.log ("A array tem",arrayMisto.length, "itens")

// b)

console.log ("O 1° item da array é:", arrayNum[0])                // Imprimindo o 1° item da array
console.log ("O 2° item da array é:", arrayString[1])             // Imprimindo o 2° item da array
console.log ("O 3° item da array é:", arrayMisto[2])              // Imprimindo o 3° item da array

// c)

console.log ("O item \"19\" está na array?", arrayNum.includes(19))          // Verificando se contém o item na array
console.log ("O item \"Pastel\" está na array?", arrayMisto.includes("Pastel"))