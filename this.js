/*
color = 'red';
let o = {
  color : 'blue'
};

function sayColor() {
  console.log(this.color);
}

sayColor(); // 'red'    if declare var color = 'red', this will show undefined

o.sayColor = sayColor;
o.sayColor(); // 'blue'
*/



c = 'red';
let o = {
  c : 'blue'
};

let speakColor = () => { console.log(this.c); };

speakColor(); // 'red'

o.speakColor = speakColor;
o.speakColor(); // 'red'
