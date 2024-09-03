class Human{
  age = 25;
  printAge =() => console.log(this.age);
}
class Person extends Human{
  sname = "RAJJJJJJJJJJJ"
  age = 50;
  printName  = () => console.log(this.sname);
}
const person1 = new Person()
person1.printAge()
person1.printName()
