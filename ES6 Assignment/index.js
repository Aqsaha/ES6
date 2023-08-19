const pi = 3.14159;
console.log(pi);
pi = 3.14159;
function sumOfSquares(numbers) {
    let sum = 0; // Declared with let inside the function scope
  
    for (let i = 0; i < numbers.length; i++) {
      const square = numbers[i] * numbers[i]; // Declared with const inside the loop scope
      sum += square;
    }
  
    if (sum > 100) {
      var message = "The sum is greater than 100."; // Declared with var inside the if statement block scope
      console.log(message);
    }
  
    return sum;
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5];
  const result = sumOfSquares(numbers);
  console.log(result); // Output: 55
  const strings = ["apple", "banana", "cherry", "date"];

for (let i = 0; i < strings.length; i++) {
  let firstLetter = strings[i][0];
  console.log(firstLetter);
}
function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();
  
  return `${day}/${month}/${year}`;
}

// Example usage
const inputDate = new Date(); // You can provide your own date here
const formattedDate = formatDate(inputDate);
console.log(formattedDate);
function sumNumbers(numbers) {
  const [num1, num2] = numbers;
  return num1 + num2;
}

// Example usage
const numbersArray = [5, 7];
const result = sumNumbers(numbersArray);
console.log(result); // Output will be 12

function formatPersonInfo(person) {
  const { name, age, occupation } = person;
  return `Name: ${name}, Age: ${age}, Occupation: ${occupation}`;
}

// Example usage
const personObject = {
  name: 'Alice',
  age: 30,
  occupation: 'Software Engineer'
};

const personInfo = formatPersonInfo(personObject);
console.log(personInfo);

function findHighestScorer(people) {
  const [firstPerson, ...restOfPeople] = people;
  
  let highestScore = firstPerson.score;
  let highestScorer = firstPerson.name;
  
  for (const person of restOfPeople) {
    if (person.score > highestScore) {
      highestScore = person.score;
      highestScorer = person.name;
    }
  }
  
  return highestScorer;
}

// Example usage
const peopleArray = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 78 },
  { name: 'David', score: 95 }
];

const highestScorerName = findHighestScorer(peopleArray);
console.log(`The person with the highest score is: ${highestScorerName}`);
function getInitials(person) {
  const { firstName = '', lastName = '', middleName = '' } = person;
  const initials = `${firstName.charAt(0)}${middleName.charAt(0)}${lastName.charAt(0)}`;
  return initials.toUpperCase();
}

// Example usage
const personObject = {
  firstName: 'John',
  middleName: 'Michael',
  lastName: 'Doe'
};

const initials = getInitials(personObject);
console.log(initials); // Output will be "JMD"
function findMaxValue(numbers) {
  return Math.max(...numbers);
}

// Example usage
const numbersArray = [5, 9, 3, 12, 7];
const maxValue = findMaxValue(numbersArray);
console.log(`The maximum value is: ${maxValue}`);

function addIdToObject(person) {
  const id = generateUniqueId(); // You need to define the generateUniqueId function
  return {
    ...person,
    id
  };
}

// Example usage
const personObject = {
  name: 'Alice',
  age: 30,
  occupation: 'Software Engineer'
};

const personWithId = addIdToObject(personObject);
console.log(personWithId);

const getStringLength = (str) => str.length;

// Example usage
const inputString = "Hello, World!";
const length = getStringLength(inputString);
console.log(length); // Output will be 13

const calculateProduct = (num1, num2) => num1 * num2;

// Example usage
const x = 5;
const y = 8;
const product = calculateProduct(x, y);
console.log(product); // Output will be 40

const calculateAverage = (numbers) => {
  if (numbers.length === 0) {
    return 0; // Avoid division by zero
  }
  
  const sum = numbers.reduce((total, num) => total + num, 0);
  return sum / numbers.length;
};

// Example usage
const numberArray = [4, 7, 10, 2, 8];
const average = calculateAverage(numberArray);
console.log(average); // Output will be 6.2

// Step a: Set up a Promise that resolves with a value of "Start Counting".
const startCountingPromise = new Promise((resolve) => {
  resolve("Start Counting");
});

// Step b: Create the counter function that outputs the value to the console.
function counter(value) {
  console.log(value);
}

// Step c: Chain the promises using the then() method to achieve the desired sequence.
startCountingPromise
  .then((value) => {
    counter(value);
    return 1;
  })
  .then((value) => {
    counter(value);
    return 2;
  })
  .then((value) => {
    counter(value);
    return 3;
  })
  .then((value) => {
    counter(value);
  });

  Start Counting
1
2
3

function mapNumbersToSquares(numbers) {
  const result = new Map();
  
  for (const number of numbers) {
    result.set(number, number * number);
  }
  
  return result;
}

// Example usage
const numbersArray = [1, 2, 3, 4, 5];
const numberSquareMap = mapNumbersToSquares(numbersArray);

// Displaying the map
for (const [number, square] of numberSquareMap) {
  console.log(`${number} squared is ${square}`);
}

function mergeMaps(map1, map2) {
  const mergedMap = new Map([...map1, ...map2]);
  return mergedMap;
}

// Example usage
const map1 = new Map([
  ['a', 1],
  ['b', 2]
]);

const map2 = new Map([
  ['b', 3],
  ['c', 4]
]);

const merged = mergeMaps(map1, map2);

// Displaying the merged map
for (const [key, value] of merged) {
  console.log(`${key}: ${value}`);
}
// Step a: Create a class for Person including the constructor for firstname and lastname.
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// Step b: Create a variable and assign a value of the new Person object using your friend's first and last names.
const friend1 = new Person('John', 'Doe');

// Step c: Now add a second variable with another friend's name using their first name and last name.
const friend2 = new Person('Alice', 'Smith');

// Step d: Output both friends into the console with a greeting of hello.
console.log(`Hello, ${friend1.firstName} ${friend1.lastName}!`);
console.log(`Hello, ${friend2.firstName} ${friend2.lastName}!`);

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Method to calculate the area of the rectangle
  calculateArea() {
    return this.width * this.height;
  }

  // Method to calculate the perimeter of the rectangle
  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

// Example usage
const rectangle = new Rectangle(5, 10);
console.log(`Rectangle area: ${rectangle.calculateArea()}`);
console.log(`Rectangle perimeter: ${rectangle.calculatePerimeter()}`);

class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def calculate_area(self):
        return self.width * self.height
    
    def calculate_perimeter(self):
        return 2 * (self.width + self.height)

# Example usage
rectangle = Rectangle(5, 10)
printf"Rectangle area: {rectangle.calculate_area()}"
print f"Rectangle perimeter: {rectangle.calculate_perimeter()}"

public class Rectangle {
  private double width;
  private double height;

  public Rectangle(double width, double height) {
      this.width = width;
      this.height = height;
  }

  public double calculateArea() {
      return width * height;
  }

  public double calculatePerimeter() {
      return 2 * (width + height);
  }

  public static void main(String[] args) {
      Rectangle rectangle = new Rectangle(5, 10);
      System.out.println("Rectangle area: " + rectangle.calculateArea());
      System.out.println("Rectangle perimeter: " + rectangle.calculatePerimeter());
  }
  hello();

  function hello() {
    console.log("Hello, world!");
  }

  const calculator = {
    value: 0,
  
    add: function(number) {
      this.value += number;
    },
  
    subtract: function(number) {
      this.value -= number;
    },
  
    multiply: function(number) {
      this.value *= number;
    },
  
    printValue: function() {
      console.log(`Current value: ${this.value}`);
    }
  };
  
  // Example usage
  calculator.add(5);
  calculator.printValue(); // Output: Current value: 5
  
  calculator.subtract(3);
  calculator.printValue(); // Output: Current value: 2
  
  calculator.multiply(4);
  calculator.printValue(); // Output: Current value: 8
  const counter = {
    count: 0,
    
    increment: function() {
      this.count += 1;
    },
    
    reset: function() {
      this.count = 0;
    }
  };
  
  // Example usage
  console.log(counter.count); // Output: 0
  
  counter.increment();
  console.log(counter.count); // Output: 1
  
  counter.increment();
  console.log(counter.count); // Output: 2
  
  counter.reset();
  console.log(counter.count); // Output: 0
  
  const fruits = ["Apple", "Banana", "Orange", "Grape", "Mango"];

for (const fruit of fruits) {
  console.log(fruit);
}

// Step a: Create an empty array
const numbersArray = [];

// Step b: Run a loop 10 times, adding new incrementing values to the array
for (let x = 0; x < 10; x++) {
  numbersArray.push(x);
}

// Displaying array contents using various methods
console.log("Array contents using console.log:");
console.log(numbersArray);

console.log("\nArray contents using for...of loop:");
for (const number of numbersArray) {
  console.log(number);
}

console.log("\nArray contents using forEach() method:");
numbersArray.forEach(number => {
  console.log(number);
});

console.log("\nArray contents using join() method:");
const joinedNumbers = numbersArray.join(", ");
console.log(joinedNumbers);

const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Log the array into the console
console.log("Array contents using console.log:");
console.log(numbersArray);

// Use the for loop to iterate through the array and output into the console
console.log("\nUsing for loop:");
for (let i = 0; i < numbersArray.length; i++) {
  console.log(numbersArray[i]);
}

// Use the for...of loop to output the value into the console from the array
console.log("\nUsing for...of loop:");
for (const number of numbersArray) {
  console.log(number);
}
 
// Step a: Create a simple object with three items
const myObject = {
  name: 'Alice',
  age: 30,
  occupation: 'Engineer'
};

// Step b: Using the for...in loop, output properties' names and values from the object
console.log("Using for...in loop with object:");
for (const property in myObject) {
  console.log(`${property}: ${myObject[property]}`);
}

// Step c: Create an array containing the same three items
const myArray = ['Alice', 30, 'Engineer'];

// Step d: Using the for...of loop, output the values from the array
console.log("\nUsing for...of loop with array:");
for (const value of myArray) {
  console.log(value);
}

const scores = new Map();
scores.set('Alice', 85);
scores.set('Bob', 92);
scores.set('Charlie', 78);

console.log("Using forEach() with Map:");
scores.forEach((score, name) => {
  console.log(`${name}: ${score}`);
});

async function delayedGreeting(name) {
  await new Promise(resolve => setTimeout(resolve, 2000)); // Delay for 2 seconds
  console.log(`Hello, ${name}!`);
}

// Example usage
delayedGreeting('Alice');

// Step a: Create a global value for a counter.
let globalCounter = 0;

// Step b: Create a function that takes one argument and returns a Promise.
function timeoutAndIncrement(value) {
  return new Promise(resolve => {
    setTimeout(() => {
      globalCounter++;
      resolve({ counter: globalCounter, argument: value });
    }, 1000); // Delay for 1 second
  });
}

// Step d: Create an asynchronous function that outputs values to the console.
async function asyncFunction() {
  const result = await timeoutAndIncrement(42);
  console.log("Async function result:", result);
  return result;
}

// Step e: Capture the returned resolve value from the await function.
async function main() {
  const resolveValue = await asyncFunction();
  console.log("Resolve value from await:", resolveValue);

  // Step f: Create a loop to iterate 10 times.
  for (let i = 1; i <= 10; i++) {
    await asyncFunction(i);
  }
}

// Start the main process
main();

function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

// Example usage
const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10 (5 * 2)
console.log(triple(5)); // Output: 15 (5 * 3)

function calculate(num1, num2) {
  return {
    add: function() {
      return num1 + num2;
    },
    multiply: function() {
      return num1 * num2;
    }
  };
}

// Example usage
const calculator = calculate(5, 3);
console.log(calculator.add());      // Output: 8 (5 + 3)
console.log(calculator.multiply()); // Output: 15 (5 * 3)


