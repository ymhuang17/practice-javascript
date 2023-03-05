#### classes in JavaScript

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

When we use *this* in a function that is not being invoked by an event handler, ** *this* is set to 
the object on which the method is called**

*this* is a **parameter** to passed to every function in JavaScript.

JavaScript assigns *this* to be a different value depending on how it is used.
  *this* is set to the new object being created
  When called as a **method**, *this* is the object on which the method was called
  When called from an **event handler**, *this* is the DOM element on which the event handler was attached


#### Bind in Classes

someFunction.bind(valueOfThis);

The bind() method:
  * Returns a new function that is a copy of someFunction
  * But in this new function, *this* is always set to valueOfThis, no matter how the function is invoked


```javascript
constructor() {
  const someValue = this;
  this.methodName = this.methodName.bind(someValue);
}
```
This is saying:
* Make a copy of **methodName**, which will be the exact same as **methodName** except this in **methodName**
  is always set to the someValue.
* The value of someValue is this to bind(), which is the value of the new object since we are in the constructor


#### Custom Events
You can listen to and dispatch Custom Events to communicate between classes

```javascript
const event = new CustomEvent(eventNameString, optParamObj);
element.addEventListener(eventNameString);
element.dispatchEvent(eventNameString);
//However,CustomEvent can only be listened to / dispatched on HTML elements, and not on arbitrary class instances
```

#### First-class functions
***A Function in JavaScript is an object of type Function***

Regular JS objects **cannot** be invoked
But you can give your object Function properties and then invoke those properties.
```javascript
function sayHi() {
  console.log('Bear Two says Hi');
}

const bear = {
  name: 'Bear Two',
  hobbies: ['eatting', 'sleeping', 'fighting'],
  greeting: sayHi
};
bear.greeting();
```

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
myfunc(); // Or myfunc().call();
f();      // Or f().call();
foo();    // Or foo().call();
```
Function objects **really** come in handy for event-driven programming!

Because every function declaration creates a Function object, we can pass Functions as parameters
to other functions.
#### Callbacks

Another way we can communicate between classes is through *callback function*:

**Callback**:A function that's passed as a parameter to another function, usually in response to something.

#### Objects in JS
Objects in JavaScript are sets of property-value pairs:
```javascript
const bear = {
  name: 'Bear Two',
  hobbies:['eatting', 'sleeping', 'fighting']
};
```
Like any other value, Objects can be saved in **variables**.
Objects can be passed as parameters to functions.

Back to the veeeeeery basics
**What is code?**
  A list of instructions your computer can execute
  Each line of code is a statement
**What is a function?**
  A labeled group of statements
  The statements in a function are executed when the function is invoked
**What is a variable?**
  A labeled piece of data


#### Functional programming

Pure *functional programming* is pretty extreme:
  * Everything in your code is either a function or an expression
  * There are no statements
  * There is no state:
    * No variables, fields, objects, etc

Comes from the idea of treating a computer program as a mathematical function

#### Practical FP in JS
There are some ideas from functional programming that are immensely useful:
  * First-class functions(functions as objects)
  * **Currying**
  * **Closures**
  * **Anonymous functions**/lambdas/function literals


#### JSON
Stands for **J**ava**S**cript **O**bject **N**otation

Define a way of **serializing** javascript objects
 * **to serialize**: to turn an object into a string that can be deserialized
 * **to deserialize**: to turn a serialized string into an object

 * JSON.stringify(*object*) returns a string representing *object* serialized in JSON format
 * JSON.parse(*jsonstring*) returns a JS object from the jsonstring serialized in JSON format


#### setTimeout
setTimeout(function, delay);

function will fire after delay milliseconds

#### Tasks, Micro-tasks and the Event Loop

The javascript runtime can do only one thing at a time...

But the JS runtime runs within a browser, which can do multiple things at a time

**Call stack**: javascript runtime call stack.Executes the javascript commands, functions.

**Task Queue**: when the browser internal implementation notices a callback from something
like setTimeout or addEventListener is should be fired, it creates a Task and enqueue it 
in the Task Queue.

**Micro-task Queue**: Promises are special tasks that execute with higher priority than 
normal tasks, so they have their own special queue.

**Event loop**: Processes the task queues
 * when the call stack is empty, the event loop pulls the next task from the task queues
 and puts it on the call stack.
 * The Micro-task queue has higher priority than the Task Queue.

 demo
 ```javascript
 console.log("part A");

 setTimeout(function timeout() {
  console.log("part C");
 },5000);

 console.log("part A");
 ```

