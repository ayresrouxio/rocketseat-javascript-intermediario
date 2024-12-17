let myArray = [
  "Um texto",
  10,
  true,
  function () {
    console.log("Função dentro do array")
  },
  {
    name: "Rodrigo",
    email: "rodrigo@email.com",
  },
]

// Texto.
console.log(myArray[0])

// Número.
console.log(myArray[1])

// Boolean.
console.log(myArray[2])

// Função.
myArray[3]()

// Objeto.
console.log(myArray[4].name)
