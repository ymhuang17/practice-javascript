//This program is OK, named function declaration hoisting

/*
console.log(sum(10, 10));
function sum(num1, num2) {
  return num1 + num2;
}
*/

//This program is not run 
console.log(sum(10, 10));
var sum = function (num1, num2) {
  return num1 + num2;
};

