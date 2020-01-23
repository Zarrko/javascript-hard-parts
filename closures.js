// Functions storing data
// Functions with permanent memory
// Persistent Lexical or Static Scope Reference Data (P.L.S.R.D) (Backpack) (Closure)
function createFunction() {
  function multiplyByTwo(num) {
    return num * 2;
  }

  return multiplyByTwo;
}

const generatedFunc = createFunction();
const result = generatedFunc(3); // 6

function outer() {
  let counter = 0;

  function incrementCounter() {
    counter++;
    console.log(counter);
  }

  return incrementCounter;
}

const myNewFunction = outer();
myNewFunction(); // 1
myNewFunction(); // 2

const myNewNewFunction = outer();
myNewNewFunction(); // 1

console.log("Hello, world!");

function createFunction() {
  function function1() {
    let greeting = "Hello World";
    console.log(greeting);
  }

  return function1;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const function1 = createFunction();
function1();

function createFunctionPrinter(input) {
  function printSample() {
    console.log(input);
  }

  return printSample;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const printSample = createFunctionPrinter("sample");
printSample();
const printHello = createFunctionPrinter("hello");
printHello();

function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log("counter", counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

willCounter();
willCounter();
willCounter();

jasCounter();
willCounter();

function addByX(x) {
  function addByTwo(y) {
    console.log(x + y);
  }

  return addByTwo;
}

const addByTwo = addByX(2);

// now call addByTwo with an input of 1
addByTwo(1);

// now call addByTwo with an input of 2
addByTwo(2);
