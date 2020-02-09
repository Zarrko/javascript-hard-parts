function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
}

const userFunctionStore = {
  increment: function() {
    this.score++;
  },
  login: function() {
    console.log("Logged In");
  }
};

const userOne = userCreator("My Name", 5);
const userTwo = userCreator("Your Name", 11);
userOne.increment();

// Using New Keyword
function userCreator2(name, score) {
  this.name = name;
  this.score = score;
}

userCreator2.prototype.increment = function() {
  this.score++;
};
userCreator2.prototype.login = function() {
  console.log("Hello World");
};

const user1 = new userCreator2("Eva", 1);
user1.increment();

// Using Classes
class UserCreator3 {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  increment() {
    this.score++;
  }
  login() {
    console.log("Please, Log Me In!!");
  }
}

const user2 = new UserCreator3("Eva Again", 11);
user2.increment();
