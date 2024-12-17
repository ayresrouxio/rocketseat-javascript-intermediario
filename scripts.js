// Break encerra a execução da repetição ou switch para seguir para próxima instrução.

let option = 3

switch (option) {
  case 1:
    console.log("Cadastrar")
    break
  case 2:
    console.log("Editar")
    break
  case 3:
    console.log("Excluir")
    break
  default:
    console.log("Opção inválida")
    break
}

// Utilizando o break para finalizar a repetição.
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break
  }

  console.log(i)
}
