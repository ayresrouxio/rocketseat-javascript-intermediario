let message = "Estou estudando os fundamentos do Javascript"

// Obtém a posição da palavra.
console.log(message.indexOf("Javascript"))

// Quando não encontra retorna -1
console.log(message.indexOf("javascript"))

// Verifica se existe a palavra na String.
console.log(message.includes("Javascript"))
console.log(message.toLowerCase().includes("javascript"))

console.log(message.includes("html"))
