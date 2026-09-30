// class demo{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//         console.log("You created an object");
//     }
//     print(){
//         console.log(`Hey bhaii your name is ${this.name} and your age is ${this.age}`);
//     }
// }

// let d= new demo("murali",19)
// d.print()
// console.log(d.name);
// console.log(d.age);


class Car {
  constructor({ brand, model, year, color = "Black" }) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color; // Falls back to "Black" if not provided
  }
  display(){
    console.log(`car brand name:${this.brand}`);
    console.log(`car model:${this.model}`);
    console.log(`car year:${this.year}`);
    console.log(`car color:${this.color}`);
    
  }
}

// Pass a single configuration object
const mycar = new Car({
  brand: "Tesla",
  model: "Model 3",
  year: 2024
});

mycar.display()

console.log(mycar.color); 
