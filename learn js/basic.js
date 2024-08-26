/* 
js statements:
Js statements are used to controll the prgram flow 
some of the statements are:
1.. let
2. var
3. const
4. break
5. continue
6. for
7. for in
8. for of
9. functions
10. if else
11. switch
12, new
13. this
14. return
15. throw
*/

/*
js keyboards 
js statemens often start with a keyboard
list of some of the keywords in js are:
let : declares block scope local variable
var : declares variable
const : declares read only variable
if : marks a block of statements to be executed depending on a condition
switch : marks a block of statements to be executed depending on different cases 
*/


//back tick in js is called template literals
let name = 'John';
let age = 25;
console.log(`My name is ${name} and I am ${age} years old`); //My name is John and I am 25 years old


/* difference between var and let in js

var and let are both used for variable declaration in javascript but the difference between them is that var is function scoped and let is block scoped.
It can be said that a variable declared with var is defined throughout the program as compared to let.
An example will clarify the difference even better

Example of var:
console.log(x); //undefined
var x = 5;
console.log(x); //5

*/


//why to use let and const in js instead of var
/* 
1. var is function scoped and let and const are block scoped
2. var can be redeclared and updated
3. var is hoisted to the top of the function
4. let and const are not hoisted
5. let and const are not redeclared

example:
var x = 5;
var x = 10;
console.log(x); //10

let y = 5;
let y = 10;
console.log(y); //error

const z = 5;
const z = 10;
console.log(z); //error

//var is hoisted
console.log(a); //undefined
var a = 5;
console.log(a); //5



*/

/*
Js identifiers 
Identifiers are names given to variables, functions, arrays, objects, etc in javascript
Rules for naming identifiers:
1. Identifiers can start with a letter, $, or _.
2. Identifiers are case-sensitive
3. Identifiers cannot be reserved keywords
4. Identifiers can contain letters, digits, $, and _
5. Identifiers cannot contain spaces or hyphens
6. Identifiers cannot start with a digit
7. Identifiers can be of any length

Js one statement many variables
You can declare many variables in one statement
example:
let a, b, c;
a = 5;
b = 10;
c = 15;
console.log(a + b + c); //30
*/


/*
Js LET keyword was introduced in ES6, 2015
let keyword allows you to declare a variable with block scope
example:  let x = 5;
console.log(x); //5

let can be updated but not redeclared
example:
let x = 5;
x = 10;
console.log(x); //10

let x = 5;
let x = 10;
console.log(x); //error
*/

/*
js CONST keyword
const keyword allows you to declare a variable with block scope
example:
const x = 5;
console.log(x); //5
//need the example of block scope
example of const in bloc scope
{
    const x = 10;
    console.log(x); //10
}
console.log(x); //error

const cannot be updated or redeclared
example:
const x = 5;
x = 10;
console.log(x); //error

--> const is a constant reference to a value
--> const does not make the value itself immutable
--> const x = {name: 'John'};
    x.name = 'Sam';
    console.log(x); //{name: 'Sam'}

--> const variables must be assigned a value when they are declared
--> const x; //error

--> Alwasy use const when you declare a variable that will not be reassigned
--> Use let when you need to reassign the variable
--> always use const when you declare an array or object
example:
const arr = [1, 2, 3];
arr.push(4);
console.log(arr); //[1, 2, 3, 4]

>> always declare cost in
    >> A new array
        example:
        const arr = [1, 2, 3];
    >> A new object
        example:
        const obj = {name: 'John'};
    >> A new function
        example:
        const greet = () => {
            console.log('Hello');
        }
    >> A new class
        example:
        //class declaration where is const is used
        const Person = class {
            constructor(name) {
                this.name = name;
            }
        }
        class Person {
            constructor(name) {
                this.name = name;
            }
        }

    >> A new regular expression
        example:
        const regex = /ab+c/;


              --> NOTE:::
            ==> The keyword const doesnt define a constant value but it defines constant reference to value So that,
                >> We can't reassign a constant value, array, object
            But we can,
                >> We can change constant array and object

                For eg.
                const players = ["Krishna", "Gaurav", "Sandesh"];
                    >> we can change the element
                        players[1] = "Roshan";
                    >> we can add element
                        players.push("Ujjwal");

                    >> But we cannot reassign the array
                        const players = [""Ronit", "Shankar"];
                        ==> This will throw an array as it was already assigned

                const person = {name: "Krishna", age: 25};
                    >> we can change the value of object
                        person.name = "Roshan";
                    >> we can add new key value pair
                        person.city = "Kathmandu";

                    >> But we cannot reassign the object
                        const person = {name: "Krishna", age: 25};
                        ==> This will throw an error as it was already assigned

*/

/*
Javascript operators
Operators are used to perform operations on variables and values
Types of operators:
1. Arithmetic operators such as +, -, *, /, %, ++, --

(more from keishna sir
There are various types of operators in js
    --> Arithmetic Operators
        Arithmetic Operators are used to perform arithmetic operations
        ==> +, -, *, ?, %, ++, --
            + -->> This is addition and used to add two numbers
            - -->> This is subtraction and used to subtract two numbers
            * -->> This is multiplication and used to multiply two numbers
            / -->> This is division used to perfrom division
            % -->> This is used to find the remainder of integer values
            ++ -->> This is used to increase the value by 1
            -- -->> This is used to decrease value by 1
            ** -->> This is exponentiation which is used to find power of certain num like 2**2 means 2 raise to power 2


)
2. Assignment operators such as =, +=, -=, *=, /=
(more from krishna sir

 --> Assignment Operators
        These operators are used to assign values to ceratain variables
            = -->> This is used to assign the value to variable
            += -->> sums left and right and assign value to left
            -= -->> subtract left and right and assign value to left
            *= -->> multiply left and right and assign value to left
            /= -->> divide left and right and assign value to left
            %= -->> return remainder by dividing left and right and assign value to left

)
3. Comparison operators such as ==, ===, !=, !==, >, <, >=, <=
(more from krishna sir

  --> Comparision Operators
        These operators are used to compare two values/variables
            == -->> This compares the equility of two operands
            === -->> This operator compares the equility of two operands wih type
            != -->> This compares inequility of two operands
            > -->> This checks whether left value is greater than right value
            < -->> This checks if left value is smaller than right value
            >= --> This checks whether the left value is greter than or equal to right value
            <= --> This checks whether the right value is greter than or equal to left value

)
4. Logical operators such as &&, ||, !
(more from krishna sir
--> Logical Operators
        Logical Operators are sumbols that are used to connect two or more expressions.
            && -->> It checks wheather two operands are non zero. i.e compares between two operands and returns true if both are true
                eg. 4==5 && 4==4 >> it returns 0 as both are false
            || -->> It checks if any one of the two operands is non-zero. i.e compares between two operands and return true if any one is true
            ! -->> It reverses the boolean result of the operands. i.e. If the operand is true it returns false and false if the operand is true.

)

5. Bitwise operators such as &, |, ~, ^, <<, >>
(more from krishna sir
--> Bitwise Operator
        & --> AND,
        | --> OR,
        ~ --> NOT,
        ^ --> XOR,
        << --> Zero fill left shift,
        >> --> signed right shift,
        >>> --> zero fill right shift,
)
6. Type operators such as typeof, instanceof
(more form krishna sir
 --> type Operators
        typeof -->> This operator returns the type of the variables
        instanceof --> This returns true if object is instance of object type

)
7. String operators such as +, +=
8. Conditional operators such as ?:
9. Comma operator such as ,
10. Unary operators such as delete, typeof, void
11. Relational operators such as in, instanceof
12. Ternary operators such as ?:
(more form krishna sir
--> Ternary Operators
            :? -->> This is short form of if..else.. statement.
                Y = (A>B) ? A : B;
                This checks if A is greater than B, if true it assigns value of Y as A else assigns value of Y as B


)

*/


/*
Javascript data types
Data types are the types of the value in programming
>> There are mainly two types of data types
    --> Primitive Data types
        Data types that are already defined in js are primitive data types in js
        --> String, Represents sequence of characters e.g "krishna"
        --> Number, Represents numeric values e.g 4, 10.8, -12, -10.11 etc
        --> Boolean, Represents boolean value either false or true
        --> Undefined, represents undefined value
        --> Null, represents null, i.e. no value at all

    --> Non-primitive Data types also known as reference data types
        They are data types that are defined by users and apart from primitive data types
        --> Object
        --> Array
        --> RegExp

    NOTE: Adding number and string, JS will treat number as string
        e.g. let x = 10;
            let name = "Krishna";
            let add = x + name; -->> 10Krishna

            furthermore, js evaluates expression from left to right. So,
            let x = 10 + 4 + "Krishna"; --> 14Krishna
            let y = "Krishna" + 10 + 4; --> Krishna104

    NOTE: In Js types are dynamic which means the same variable can be used to hold different data types and we can change the type later
            {
                let x; here x is undefined
                x = 5; here x is Number
                x = "Krishna"; here x is string
            }
*/


/*
Javascript functions
Functions are the block of codes that are used to perfrom the specific tasks.
>> In other programming languages functions are also called methods.
>> A function in javascript should be invoked or called by something.
        >> SYNTAX TO WRITE JS FUNCTIONS

        function functionName(Parameters seperated by commas){
            code to execute
        }

    Function Return
    return is a keyword used to return something from the functions
    when js code reaches the return statement the code will stop executing
        >> eg. function add(a, b){
            return a+b;
        }

        The function above returns sum of two numbers

        USE OF FUNCTIONS is mainly Code reusability


        LOCAL VARIABLES
            >> Variables defined inside functions are local variables
            >> They can't be accessed from outside the functions
            eg.
            function printName(){
                let name = "Krishna Adhikari";

                we can use name here
            }
                we can't use name here
*/


/* 
Javascript objects
Objects are the collection of properties and methods
Properties are the values associated with the object
Methods are the functions associated with the object
>> In js objects are defined with curly braces {}
>> Properties and methods are defined as key value pairs
>> Properties are the values associated with the object
>> Methods are the functions associated with the object
>> Properties and methods are accessed using dot notation

    eg.
    let person = {
        name: "Krishna",
        age: 25,
        greet: function(){
            console.log("Hello");
        }
    }
In js objects can be created in two ways
    >> Using object literal
        This is the most common and simple way to create objects in js
        eg.
        let person = {
            name: "Krishna",
            age: 25,
            greet: function(){
                console.log("Hello");

                or
         var car1 ={
                "model": "Ferrari VO1",
                "price": 12221221,
                "milege": 23,
                getModel: function(){
                    return this.model;
                }
            }
            accessing object values,
                car1.getModel();
                car1.price;
                car1.milege;
    >> Using object constructor
        This is another way to create objects in js
        eg.
        function Person(name, age){
            this.name = name;
            this.age = age;
            this.greet = function(){
                console.log("Hello");
            }
        }
        let person = new Person("Krishna", 25);
        person.greet();

        or
          We can create js objects using new keyword too
            var person = new Object();
            person.firstName="Krishna";
            person.age = 21;

            accessing values
            person.firstName; >> Krishna

Objects Methods
    >> Objects can have methods
    >> Methods are the functions associated with the object
    >> Methods are defined as key value pairs
    eg.
    let person = {
        name: "Krishna",
        age: 25,
        greet: function(){
            console.log("Hello");
        }
    }
    person.greet();

    >> hasOwnProperty() method
        This method returns true if the object has the specified property
        eg.
        let person = {
            name: "Krishna",
            age: 25,
        }
        person.hasOwnProperty("name"); >> true
        person.hasOwnProperty("city"); >> false
    >> access object properties
        >> Object properties can be accessed using dot notation
        eg.
        let person = {
            name: "Krishna",
            age: 25,
        }
        person.name; >> Krishna
        person.age; >> 25
    >> access object keys
        >> Object keys can be accessed using Object.keys() method
        eg.
        let person = {
            name: "Krishna",
            age: 25,
        }
        Object.keys(person); >> ["name", "age"]

    >> Object cab be nested >> object inside object
        eg.
        let person = {
            name: "Krishna",
            age: 25,
            address: {
                city: "Kathmandu",
                country: "Nepal"
            }
        }
        person.address.city; >> Kathmandu
        person.address.country; >> Nepal

    Note: In js objects are reference data types
    >> Objects are reference data types
    >> Objects are stored and copied by reference
    >> When we assign an object to a variable, the variable holds a reference to the object
    >> When we assign an object to another variable, the reference is copied, not the object itself
    eg.
    let person = {
        name: "Krishna",
        age: 25,
    }
    let person2 = person;
    person2.name = "Gaurav";
    console.log(person.name); >> Gaurav
     

    Or (from krishna sir)

     NOTE:
    JavaScript object is a standalone entity that holds multiple values in terms of properties and methods.

    Object property stores a literal value and method represents function.

    An object can be created using object literal or object constructor syntax.

    Object literal:
    var person = {
        firstName: "James",
        lastName: "Bond",
        age: 25,
        getFullName: function () {
            return this.firstName + ' ' + this.lastName
            }
    };

    Object constructor:
    var person = new Object();

    person.firstName = "James";
    person["lastName"] = "Bond";
    person.age = 25;
    person.getFullName = function () {
            return this.firstName + ' ' + this.lastName;
        };

    Object properties and methods can be accessed using dot notation or [ ] bracket.

    An object is passed by reference from one function to another.

    An object can include another object as a property

    More on accessing values,
        >> person["firstName"];
        >> person.firstName;
    !NOTE: Do Not Declare Strings, Numbers, and Booleans as Objects!
*/




// -------------------------------
// --    JAVASCRIPT STRINGS     --
// -------------------------------

/*
    JS strings are used to store and manipulate texts
    eg. let text = "Hello World"; //this is string text
        let tex = new String("Hello World"); //this is string object

    JS STRING METHODS
    Extracting String Parts
        >> slice --> It extracts a part of string and returns the extracted part as new string
            takes 2 parameters (start, end); start is starting position and end is end position but end not included

            let str = "Apple, Banana, Kiwi";
            let slicedStr = str.slice(7,13);
            console.log(slicedStr); This prints Banana. Start position 7th index B and ends with 12th index a

            NOTE: Slice accepts negative integer also
                eg. console.log(slice(-3)); this will print Kiwi

        >> substring --> Substring is similar to slice but the only differene is that it doesn't accept negative integer
            eg. substring(7,12); this is accepted
                substring(-4); this is not accepted

        >> substr --> It is also similar to slice but the second parameter defines the length of extracted part
            eg. let n = "this is ok";
                console.log(substr(3, 6); >> s is
                first parameter is starting index and last is length to extract


    Replacing String Content
        >> The replace() method in js replaces a specified value with another value in string
            let words = "my name is punya adhikari.";
            let replacedText = words.replace("punya", "Krishna");  this replaces punya with Krishna
            console.log(replacedText); >> my name is Krishna adhikari

        !NOTE:
        >> the replace() method does not change the string but it returns new string

        >> replace method only replaces first match
            for eg. let txt = "these is great. He is good";
                    let replacedText = txt.replace("is", "are");
                    this returns these are great. He is good    >> replaces only first match

        >> replace is case sensitive i.e. Alpha & alpha are different
            to replace case insensitive we can use regular expression with an /i flag
            >> rext.replace(/ALPHA/i, "delta"); this replaces alpha with delta.
            !Regular expressions are written without qotes

            to replace all matches we can use /g flag
                let txt = "these is great. He is good";
                let replacedText = txt.replace(/is/g, "are");
                this returns these are great. He are good >> replaces all matches


    Converting to Upper and Lower Case
        >> toUpperCase();
            This converts the word to uppercase;
            eg. word.toUpperCase(); This returns the value of words in uppercase

        >>toLowerCase();
            This converts the word to lowercase
            eg. word.toLowerCase(); This will returns the value of word in lowercase.


    Concat()
        >> this method is used to join two or more texts/strings
        let x = "Hi";
        let greet = "Good Morning.";
        let newText = x.concat(" ", greet);
        >> This will join strings with value of x


    !!ALL STRING METHODS RETURNS NEW STRING, THEY DONT MODIFY ORIGINAL STRING

    String.trim();
        >> This method removes all the white space from starting and begining of the string
        e.g, let name = "    Krishna Adhikari     ";
                console.log(name.trim()); >> Krishna Adhikari
                This removes spaces from starting and ending of string

    JS String Pdding
        >> This supports padding at begining and end of a string
            This has two methods. padStart and padEnd
            e.g.    let nam = "5";
                    console.log(nam.padEnd(4, 0));
                     >> returns 5000


    Extracting String Characters
        >> charAt(position) --> This will return the character at a specified index (position) in a string
            let text = "Hello World";
            text.charAt(1);  >> This returns e

        >> charCodeAt(position) --> This will return the character unicode of specified index (position)
            e.g.
                let text = "Hello World";
                console.log(text.charCodeAt(0));  returns 72 as H in unicode is 72


    Property Access
        >> we can access every element in string using specific index
            let name = "Krishna";
            console.log(name[2]); >> i

        NOTE: If we want to work with string as an array, we can convert it to an array


    Converting a string to an array
        >> To convert a string to array we can use split
            split takes parameter called seperator which specify the split position
            if seperators are not defined, it return array with wole string as index [0]

                text.split(",")          // Split on commas
                text.split(" ")          // Split on spaces
                text.split("|")          // Split on pipe

        let text = "great";

        let strArr = text.split("");

        console.log(strArr); >> this will return [ 'g', 'r', 'e', 'a', 't' ]

        we can use join to convert array to string and split is used to onvert string to array



    JS String Search
        we can search specific string in js using various methods like
            >> String.indexOf()
                This returns the index of the first occurrence of a specified text in a string

            >>String.search()
                The search() method searches a string for a specified value and returns the position of the match:

                The two methods, indexOf() and search(), are equal?

                They accept the same arguments (parameters), and return the same value?

                The two methods are NOT equal. These are the differences:

                The search() method cannot take a second start position argument.
                The indexOf() method cannot take powerful search values (regular expressions).
                You will learn more about regular expressions in a later chapter.

            >> String.lastindexOf()
                The lastIndexOf() method returns the index of the last occurrence of a specified text in a string

            >> String.startsWith()
            >> String.endsWith() etc..


    JS Template Literals
        Template Literals use back-ticks (``) rather than the quotes ("") to define a string:
        With template literals, you can use both single and double quotes inside a string:
        Template literals allows multiline strings:

        Template literals provide an easy way to interpolate variables and expressions into strings.
            >> ${variables/expressions}
            eg.
            let price = 10;
            let VAT = 0.25;

            let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
*/