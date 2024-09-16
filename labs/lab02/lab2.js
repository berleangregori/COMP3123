//COMP3123 lab 2
//Berlean Gregori 101465969
//EX1
// const greeter = (myArray, counter) => {
//     const greetText = 'Hello ';
    
//     for (const name of myArray) {
//       console.log(`${greetText}${name}`);
//     }
//   };
  
// greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

//EX2 + EX3
// const capitalize = str => {
//     const [firstLetter, ...rest] = str;
//     return `${firstLetter.toUpperCase()}${rest.join('')}`;
//   };
  
// // console.log(capitalize('fooBar')); commented for ex 3
// // console.log(capitalize('nodeJs')); 

// const colors = ['red', 'green', 'blue'];
// const capitalizedColors = colors.map(capitalize);
// console.log(capitalizedColors);

//EX4
// const values = [1, 60, 34, 30, 20, 5];
// const filterLessThan20 = values.filter(value => value < 20);
// console.log(filterLessThan20);

//EX5 
// const array = [1, 2, 3, 4];
// const calculateSum = array.reduce((total, value) => total + value, 0);
// const calculateProduct = array.reduce((total, value) => total * value, 1);
// console.log(calculateSum);   
// console.log(calculateProduct);

//EX6
class Car {
    constructor(model, year) {
      this.model = model;
      this.year = year;
    }
  
    details() {
      return `Model: ${this.model} Engine ${this.year}`;
    }
  }
  
  class Sedan extends Car {
    constructor(model, year, balance) {
      super(model, year);
      this.balance = balance;
    }
  
    info() {
      return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
    }
  }
  
  const car2 = new Car('Pontiac Firebird', 1976);
  console.log(car2.details());
  
  const sedan = new Sedan('Volvo SD', 2018, 30000);
  console.log(sedan.info());
  

  