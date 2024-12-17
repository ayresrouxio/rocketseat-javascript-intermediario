let date = new Date("2024-07-02T14:30:10")

console.log(date.toLocaleString())

// Exibe data e hora em styles diferentes.
console.log(
  date.toLocaleString("pt-BR", {
    dateStyle: "short",
  })
)

console.log(
  date.toLocaleString("pt-BR", {
    dateStyle: "long",
  })
)

console.log(
  date.toLocaleString("pt-BR", {
    dateStyle: "medium",
  })
)

console.log(
  date.toLocaleString("pt-BR", {
    dateStyle: "full",
  })
)

console.log(
  date.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  })
)

const amount = 1223.5
console.log(
  amount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
)
