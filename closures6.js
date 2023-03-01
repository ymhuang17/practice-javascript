var name = "The Window";
var object = {
  name : "My object",

  getNameFunc : function() {
    var that = this;
    return function() {
      return that.name;
    };
  }
};

console.log(object.getNameFunc()());
