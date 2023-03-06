function addThree(a) {
  return function(b) {
    return function (c) {
      return a + b + c;
    }
  }
}

var f = addThree(1)(2);
console.log(f(4));
console.log(f(6));
console.log(f(8));
