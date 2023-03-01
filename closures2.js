for (var i = 0; i < 5; ++i) {
  (function (x) {
    setTimeout(function() {
      console.log(x++);
    }, 4000);
  })(i);
}

console.log(i);
