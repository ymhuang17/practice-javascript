var fns = [];

function definer() {
  for (var i = 0; i < 5; i++) { //try to change var i = 0 => let i = 0
    fns.push(function() {
      return i;
    });
  }
}

definer();

for (let i = 0; i < 5; i++) 
  console.log(fns[i]());
