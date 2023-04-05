var fns = [];

function definer() {
  for (var i = 0; i < 5; i++) {
    fns.push(function (local_i) {
      return function () {
        return local_i;
      };
    }(i));
  }
}

definer();

for (let i = 0; i < 5; i++)
  console.log(fns[i]());
