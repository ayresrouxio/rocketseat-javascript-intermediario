let message = "Estou estudando os fundamentos do Javascript."

// Comprimento de uma string.
console.log(message.length)

let password = "123456"

if (password.length < 6) {
  console.log("A senha deve ter ao menos 6 caracteres.")
}

// Quantos dígitos tem um número.
let value = 12345
console.log(String(value).length)
console.log(value.toString().length)
