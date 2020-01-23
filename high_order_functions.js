function copyArrayAndManipulate(array, instructions) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }

  return output;
}

function multiplyByTwo(input) {
  return input * 2;
}

const result = copyArrayAndManipulate([1, 2, 3], multiplyByTwo);

console.log(result);

// Arrow Functions
const multiplyByThree = input => input * 2;
const resultByThree = copyArrayAndManipulate([1, 2, 3], (input = input => 3));
