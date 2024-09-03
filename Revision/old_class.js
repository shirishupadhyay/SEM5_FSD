class Animal{
  constructor(name){
    this.name = name;
  }
  describe(){
    return `This is a ${this.name}`;
  }
}
const someAnimal = new Animal("Kutta")
console.log(someAnimal.describe())
