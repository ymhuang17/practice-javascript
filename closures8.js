function say(hi) {
  return function(name) {
    return hi + " , " + name;

  }
}

var f = say("Goodbyte");
console.log(f("evan youyou"));
console.log("-------------------");

function box() {
  var val = undefined;
  return {
    set: nval => val = nval,
    get: () => val,
    type: () => typeof val
  };
}
var b = box();
console.log(b.type());
b.set(666);
console.log(b.get());
console.log(b.type());
