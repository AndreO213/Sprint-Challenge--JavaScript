// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

// myFunction is able to console.log the external variable because everything inside a function can see outside of it's scope but everything outside cannot see inside. Also the external variable is being defined so it's able to be console logged.

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(sum){
  let num = sum;
  let reset = 0;
  for (let i = reset; i <= num; i++) {
    reset += i;
  }
  return reset;
}

console.log(summation([4]))