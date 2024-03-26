/**************************************************** Inheritance **********************************************/

// Base class
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function () {
  console.log(`${this.name} is eating.`);
};
// Derived class
function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
  console.log(`${this.name} is barking.`);
};
// Creating instances
const myDog = new Dog('Buddy', 'Labrador');
myDog.eat(); // Output: Buddy is eating.
myDog.bark(); // Output: Buddy is barking.
/**************************************************** Encapsulation **********************************************/

function Counter() {
  let count = 0;

return {
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
    getCount: function () {
      return count;
    }
  };
}
const counter = Counter();
counter.increment();
counter.increment();
console.log(counter.getCount()); // Output: 2
/**************************************************** Polymorphism **********************************************/

// Base class
class Shape {
  calculateArea() {
    throw new Error('Method not implemented.');
  }
}

// Derived classes
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  calculateArea() {
    return this.width * this.height;
  }
}
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}
// Usage
const rectangle = new Rectangle(5, 3);
console.log(rectangle.calculateArea()); // Output: 15
const circle = new Circle(7);
console.log(circle.calculateArea()); // Output: 153.93804002589985
/**************************************************** Design Patterns **********************************************/

const Singleton = (function () {
  let instance;
  
  function createInstance() {
    const object = new Object('I am the Singleton object.');
    return object;
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();
// Usage
const singletonObject1 = Singleton.getInstance();
const singletonObject2 = Singleton.getInstance();
console.log(singletonObject1 === singletonObject2); // Output: true