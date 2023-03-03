function foo() {
  console.log(age);
  var age = 26;
}
foo(); // undefined

// Above function is viewed as below function
// This is named "hoist"
function foo() {
  var age;
  console.log(age);
  age = 26;
}
foo(); // undefined


