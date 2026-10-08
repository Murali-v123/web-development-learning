class MathCalculator {  
  static add(a, b) {
    return a + b;
  }

  static heybhaii(a, b) {
    return "Heyy Bhaiiii kasie ho tum";
  }

  sayHello() {
    return "Hello!";
  }
}

console.log(MathCalculator.add(5, 10));

const calc = new MathCalculator();
// calc.add(10,3) gives us error
console.log(calc.sayHello());
console.log(MathCalculator.heybhaii());
