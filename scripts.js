let date = new Date("2024-07-02T14:30:15")

// Exibe a data e hora no formato local.
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())
console.log(date.toLocaleString())

// Exibe a data e hora no formato escolhido.
console.log(date.toLocaleDateString("pt-BR"))
console.log(date.toLocaleTimeString("pt-BR"))
console.log(date.toLocaleString("pt-BR"))
