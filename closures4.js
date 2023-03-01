function fun1() {
  var n = 999;
  nAdd = function() { n += 1 }
  function fun2() {
    console.log(n);
  }
  return fun2;
}

var result = fun1();
result();
nAdd();
result();
