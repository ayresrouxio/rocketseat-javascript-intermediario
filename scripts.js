class Animal {
  constructor(name) {
    this.name = name
  }

  makeNoise() {
    console.log("Algum som genérico")
  }
}

class Dog extends Animal {
  makeNoise() {
    console.log("Woof! Woof! Woof!")
  }
}

class Cat extends Animal {
  makeNoise() {
    console.log("Miau... Miau... Miau...")
  }

  run() {
    console.log("Correndo...")
  }
}

const dog = new Dog("Bento")
dog.makeNoise()

const cat = new Cat("Mili")
cat.makeNoise()
cat.run()
