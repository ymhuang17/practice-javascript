### classes in JavaScript

#### public methods

```javascript
class ClassName {
  constructor(params)  { // constructor is optional
  //...
  }
  methodName() { // you don't use the <strong>function</strong> keyword to define methods
  //...
  }
  methodone() {
    this.methodtwo(); // within the class, you must always refer to other methods in the class 
  }
  methodtwo() {
    // ...
  }
  //All method are **public**,and you **cannot** specify private methods...yet.

}
```

#### Instantiation
```javascript
const x = new ClassName();
const y = new ClassName();
y.methodName();
```

#### This
The **this** keyword in JavaScript is **dynamically assigned**.


#### Custom Events
You can listen to and dispatch Custom Events to communicate between classes

```javascript
const event = new CustomEvent(eventNameString, optParamObj);
element.addEventListener(eventNameString);
element.dispatchEvent(eventNameString);
//However,CustomEvent can only be listened to / dispatched on HTML elements, and not on arbitrary class instances
```

#### First-class functions

Functions are treated like variables of type Function:
* Can be passed as parameters
* Can be saved in variables
* Can be defined without a name / indentifier
  * Also called an **anonymous function**
  * Also called a **lambda function**
  * Also called a **function literal value**

You can declare a function in several ways:
```javascript
function myfunc(params) {
}

const f = function(params) {
}; //Attentions!!!

const foo = (params) => {
}; //Arrow Functions

//Functions are invoked in the same way, regardless of how they were declared:
myfunc();
f();
foo();
```

#### Callbacks

Another way we can communicate between classes is through *callback function*:

**Callback**:A function that's passed as a parameter to another function, usually in response to something.


