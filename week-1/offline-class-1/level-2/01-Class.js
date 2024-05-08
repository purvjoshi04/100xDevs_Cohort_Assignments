
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
  static myType(){
    console.log('I am a dog')

  }
}

Animal.myType()
let dog = new Animal("Dog", 4);
console.log(dog.describe());