/*
Advanced javascript concepts
1. Execution context
2. Hoisting
3. Scope
4. Closure
5. this keyword
6. call, apply, bind
7. new keyword
8. prototypal inheritance
9. Object.create
10. ES6 classes
11. Inheritance
12. Encapsulation
13. Polymorphism
14. IIFE
15. Event bubbling
16. Event delegation
17. Event loop
18. Promises
19. async/await
20. Web workers
21. Service workers
22. Local storage
23. Session storage
24. Cookies
25. Cache
26. Web sockets
27. REST API
28. GraphQL
29. AJAX
30. CORS
31. JSON
32. JSONP
*/

// 1. Execution context
/* 
Execution context is an abstract concept of an environment where the javascript code is evaluated and executed.
There are two types of execution context:
1. Global execution context
execution context is created in two phases:
1. Creation phase
creation phase is responsible for creating global object, this, outer environment, setting up memory space for variables and functions. It also sets up the scope chain.
example:
console.log(a); // undefined
console.log(b); // ReferenceError: b is not defined
var a = 10;

2. Execution phase
execution phase is responsible for executing the code line by line. It has access to variables and functions.
example:
console.log(a); // 10
var a = 10;
console.log(b); // ReferenceError: b is not defined

2. Functional execution context
functional execution context is created when a function is invoked. It has its own creation and execution phase.
example:
function a() {
  console.log(b); // undefined
  var b = 20;
  console.log(b); // 20
}
a();

execution context stack:
execution context stack is a stack data structure that stores the execution context. It follows the LIFO (Last In First Out) principle.
example:
function a() {
  console.log('a');
}
function b() {
  console.log('b');
  a();
}


*/

// 4. Closure
/*
Closure is a function that has access to the outer function's variables even after the outer function has returned.
example:
function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}
var innerFn = outer();
innerFn(); // 10
//another example
function counter() {
  var count = 0;
  return function() {
    return ++count;
  }
}
var count = counter();
console.log(count()); // 1

*/

//6. call, apply, bind
/*
call, apply, bind are used to change the value of this keyword in a function.
1. call
call method is used to call a function with a given this value and arguments provided individually.
example:
function greet() {
  console.log(this.name);
}
var obj = {name: 'John'};
greet.call(obj); // John

2. apply
apply method is used to call a function with a given this value and arguments provided as an array.
example:
function greet() {
  console.log(this.name);
}
var obj = {name: 'John'};
greet.apply(obj); // John
3. bind
bind method is used to create a new function that, when called, has its this keyword set to the provided value.
example:
function greet() {
  console.log(this.name);
}
var obj = {name: 'John'};
var greetFn = greet.bind(obj);
greetFn(); // John
*/

// 7. new keyword
/*
new keyword is used to create an instance of a user-defined object type or built-in object type.
example:
function Person(name) {
  this.name = name;
}
var person = new Person('John');
console.log(person.name); // John

*/

// 8. prototypal inheritance
/*
prototypal inheritance is a way to share methods and properties between objects in javascript.
example:
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  console.log('Hello, ' + this.name);
}
var person = new Person('John');
person.greet(); // Hello, John

*/
// 9. Object.create
/*
Object.create is used to create a new object with the specified prototype object and properties.
example:
var person = {
  name: 'John',
  greet: function() {
    console.log('Hello, ' + this.name);
  }
}
var newPerson = Object.create(person);
newPerson.greet(); // Hello, John

*/
// 10. ES6 classes
/*
es6 classes are a simple sugar over the prototype-based inheritance.
example:
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log('Hello, ' + this.name);
  }
}
var person = new Person('John');
person.greet(); // Hello, John

*/
// 11. Inheritance
/*
Inheritance is a way to share methods and properties between objects in javascript.
example:
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  console.log('Hello, ' + this.name);
}
function Employee(name, title) {
  Person.call(this, name);
  this.title = title;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.work = function() {
  console.log(this.name + ' works as ' + this.title);
}
var employee = new Employee('John', 'Developer');
employee.greet(); // Hello, John
employee.work(); // John works as Developer

*/
// 12. Encapsulation
/*
Encapsulation is a way to restrict access to the inner workings of an object and only expose what is necessary.
example:
function Person() {
  var name = 'John';
  this.getName = function() {
    return name;
  }
}
var person = new Person();
console.log(person.name); // undefined
console.log(person.getName()); // John

*/
// 13. Polymorphism
/*
Polymorphism is a way to perform a single action in different ways.
example:
function Animal() {}
Animal.prototype.makeSound = function() {
  console.log('Animal sound');
}
function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.makeSound = function() {
  console.log('Bark');
}
function Cat() {}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.makeSound = function() {
  console.log('Meow');
}
var dog = new Dog();
var cat = new Cat();
dog.makeSound(); // Bark
cat.makeSound(); // Meow

*/

// 14. IIFE
/*
IIFE (Immediately Invoked Function Expression) is a way to execute a function immediately after it's created.
example:
(function() {
  console.log('IIFE');
})();

*/
// 15. Event bubbling
/*
Event bubbling is a way of event propagation in the HTML DOM where the event is first captured and handled by the innermost element and then propagated to outer elements.
example:
<div id="outer">
  Outer
  <div id="inner">
    Inner
  </div>
</div>
document.getElementById('inner').addEventListener('click', function() {
  console.log('Inner clicked');
});
document.getElementById('outer').addEventListener('click', function() {
  console.log('Outer clicked');
});

*/
// 16. Event delegation
/*
Event delegation is a way of event propagation in the HTML DOM where the event is handled by a single common ancestor for all the elements.
example:
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
document.getElementById('list').addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    console.log(event.target.textContent);
  }
});

*/
// 17. Event loop
/*
Event loop is a way to handle asynchronous operations in javascript.
example:
console.log('Start');
setTimeout(function() {
  console.log('Timeout');
}, 0);
console.log('End');

*/
// 18. Promises
/*
Promises are a way to handle asynchronous operations in javascript.
example:
var promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('Done');
  }, 1000);
});
promise.then(function(result) {
  console.log(result);
});

*/
// 19. async/await
/*
async/await is a way to handle asynchronous operations in javascript using promises.
example:
async function getData() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('Data');
    }, 1000);
  });
}
async function main() {
  var data = await getData();
  console.log(data);
}
main();

*/
// 20. Web workers
/*
Web workers are a way to run javascript code in the background without blocking the main thread.
example:
var worker = new Worker('worker.js');
worker.postMessage('Hello');
worker.onmessage = function(event) {
  console.log(event.data);
};

*/
// 21. Service workers
/*
Service workers are a way to run javascript code in the background for offline capabilities, push notifications, etc.
example:
// service-worker.js
self.addEventListener('install', function(event) {
  console.log('Installed');
});
self.addEventListener('activate', function(event) {
  console.log('Activated');
});     
// main.js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(function(registration) {
      console.log('Registered');
    });
}

*/
// 22. Local storage
/*
Local storage is a way to store key-value pairs in the browser.
example:
localStorage.setItem('name', 'John');
console.log(localStorage.getItem('name'));

*/
// 23. Session storage
/*
Session storage is a way to store key-value pairs in the browser for a session.
example:
sessionStorage.setItem('name', 'John');
console.log(sessionStorage.getItem('name'));

*/
// 24. Cookies
/*
Cookies are a way to store key-value pairs in the browser.
example:
document.cookie = 'name=John';
console.log(document.cookie);

*/
// 25. Cache
/*
Cache is a way to store network requests in the browser.
example:
caches.open('v1').then(function(cache) {
  cache.add('/index.html');
});

*/
// 26. Web sockets
/*
Web sockets are a way to establish a two-way communication channel between the client and the server.
example:
var socket = new WebSocket('ws://localhost:8080');
socket.onopen = function() {
  console.log('Connected');
};
socket.onmessage = function(event) {
  console.log(event.data);
};

*/
// 27. REST API
/*
REST API is a way to interact with the server using HTTP methods like GET, POST, PUT, DELETE.
example:
GET /api/users
POST /api/users
PUT /api/users/:id
DELETE /api/users/:id

*/
// 28. GraphQL
/*
GraphQL is a query language for APIs and a runtime for executing those queries.
example:
query {
  users {
    id
    name
  }
}

*/
// 29. AJAX
/*
AJAX (Asynchronous JavaScript And XML) is a way to make asynchronous HTTP requests from the browser.
example:
var xhr = new XMLHttpRequest();
xhr.open('GET', '/api/users', true);
xhr.onload = function() {
  console.log(xhr.responseText);
};
xhr.send();

*/
// 30. CORS
/*
CORS (Cross-Origin Resource Sharing) is a way to allow or restrict resources on a web page to be requested from another domain outside the domain from which the resource originated.
example:
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST

*/
// 31. JSON
/*
JSON (JavaScript Object Notation) is a lightweight data interchange format.
example:
{
  "name": "John",
  "age": 30
}

*/
// 32. JSONP
/*
JSONP (JSON with Padding) is a way to overcome the cross-domain restrictions in AJAX.
example:
<script>
function handleResponse(data) {
  console.log(data);
}
</script>
<script src="http://example.com/data?callback=handleResponse"></script>

*/


