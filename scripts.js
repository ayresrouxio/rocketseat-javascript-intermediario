let message = "Estou estudando os fundamentos do Javascript."

// Substituindo parte de um texto.
console.log(message.replace("Javascript", "HTML"))

// Extraindo uma parte da string (start, end).
console.log(message.slice(6, 30))

// Extraindo uma parte da string de trás para frente.
console.log(message.slice(-11))

// Remove espaços em branco no inicio e no final da string.
let textWithSpace = "    Texto de exemplo     "
console.log(textWithSpace.trim())
