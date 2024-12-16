/*
  Objeto:
  - Uma coleção de dados e/ou funcionalidades;
  - Podem ter propriedades e métodos;
*/

// Cria um objeto vazio.
const obj = {}

console.log(obj)
console.log(typeof obj)

// Cria um objeto com propriedades e métodos.
const user = {
  email: "rodrigo@email.com",
  age: 18,
  name: {
    first_name: "Rodrigo",
    surname: "Gonçalves",
  },
  address: {
    street: "Rua X",
    number: 23,
    city: "São Paulo",
    postal_code: "123456-123",
  },
  message: () => {
    console.log("Oi Rodrigo")
  },
}

// Acessando propriedades e métodos usando notação de ponto.
console.log(user.email)

// Acessando propriedade de objetos.
console.log(user.name.first_name)

// Executa o método do objeto.
user.message()

// Notação de colchetes.
console.log(user["email"])
console.log(user["name"]["first_name"])
user["message"]()
