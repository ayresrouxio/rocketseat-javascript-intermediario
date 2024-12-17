class Animal {
  constructor(name) {
    this.name = name
  }

  makeNoise() {
    console.log("Algum som genérico")
  }
}

class Dog extends Animal {
  // Empty
}

class Cat extends Animal {
  // Empty
}

const dog = new Dog("Bento")
dog.makeNoise()

const cat = new Cat("Mili")
cat.makeNoise()
