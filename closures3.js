var x = "global";
function f() {
  var x = "local";
  function g() { console.log(x); }
  g();
}

f();
