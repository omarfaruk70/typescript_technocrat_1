"use strict";
// function in ts
// normal function in ts (parameter type, return type)
function addTwo(num1, num2) {
    //here number is the return value type
    return num1 + num2;
}
// addTwo(4, 9);
//console.log(addTwo);
// arrow function
const addThree = (one, two, three = 10) => one + two + three;
console.log(addThree(1, 5));
// create a method (a function in an object
const poorUser = {
    name: "mezba",
    balance: 0,
    addBalance(balance) {
        return this.balance + balance;
    },
};
// callback function (map, reduce etc)
const nums = [4, 5, 6, 4, 5];
const newArr = nums.map((element) => element * element);
console.log(newArr);
