// function in ts
// normal function in ts (parameter type, return type)
function addTwo(num1: number, num2: number): number {
  //here number is the return value type
  return num1 + num2;
}
// addTwo(4, 9);
//console.log(addTwo);

// arrow function
const addThree = (one: number, two: number, three: number = 10): number => one + two + three;
console.log(addThree(1, 5));
// create a method (a function in an object
const poorUser = {
  name: "mezba",
  balance: 0,
  addBalance(balance: number): number {
    return this.balance + balance;
  },
};

// callback function (map, reduce etc)
const nums: number[] = [4, 5, 6, 4, 5];
const newArr = nums.map((element: number): number => element * element);
console.log(newArr);
