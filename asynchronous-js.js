/* CHALLENGE 1 */

function sayHowdy() {
  console.log("Howdy");
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log("Partnah");
}
// After thinking it through, uncomment the following line to check your guess!
testMe(); // what order should these log out? Partnah then howdy

/* CHALLENGE 2 */

function delayedGreet() {
  // ADD CODE HERE
  setTimeout(function() {
    console.log("Welcome");
  }, 3000);
}

// Uncomment the following line to check your work!
delayedGreet(); // should log (after 3 seconds): welcome

/* CHALLENGE 3 */

function helloGoodbye() {
  // ADD CODE HERE
  setTimeout(function() {
    console.log("good bye");
  }, 2000);
  console.log("hello");
}

// Uncomment the following line to check your work!
helloGoodbye(); // should log: hello // should also log (after 2 seconds): good bye
