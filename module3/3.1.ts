{
  // OOP in Typescript
  class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound;
    }

    // creating a new method
    makeSound() {
      // here always remember arrow function e this kaj kore nah so normal function use korte hobe
      console.log(`This ${this.name} sounds is ${this.sound}`);
    }
  }

  const dog = new Animal("german sephard", "dog", "ghew ghew");
  const cat = new Animal("Billu", "cat", "mew mew");
  //   call the methods like cat.makeSound() or dog.makeSound();
  dog.makeSound();

  //   oop with public modifier and parameter properties

  class StudentInfo{
    constructor(public name: string, public age: number, public blood: string){}
    myInfo(){
        console.log(`This is ${this.name}. I am ${this.age} years old. My blood group is ${this.blood}`);
    }
  }
  const student1 = new StudentInfo("Omar Faruk", 23, "B+");
  student1.myInfo()

}
