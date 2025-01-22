// Web Cohort 1 Exercise 1

// For each expression, predict what you think the output will be in a comment (`//`) ***without first running the command***. Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

// Example
typeof("potato")
// Prediction: Vegetable
// Actual: String
String
// What is the output of each of the expressions below?

typeof(15)
// Prediction:
// Actual:
number

typeof(5.5)
// Prediction:
// Actual:
Number
typeof(NaN)
// Prediction:
// Actual:
Null
typeof("hello")
// Prediction:
// Actual:
String
typeof(true)
// Prediction:
// Actual:
Boolean
typeof(1 != 2)
// Prediction:
// Actual:
Boolean

"hamburger" + "s"
// Prediction:
// Actual:
hamburgers
"hamburgers" - "s"
// Prediction:
// Actual:
Nan
"1" + "3"
// Prediction:
// Actual:
13
"1" - "3"
// Prediction:
// Actual:
-2
"johnny" + 5
// Prediction:
// Actual:
Johnny5
"johnny" - 5
// Prediction:
// Actual:
Nan
99 * "luftbaloons"
// Prediction:
// Actual:
Nan
// Data Structures

// Arrays

// Javascript provides us with a number of native methods that allow us to interact with arrays. Find methods that do each of the following and provide an example...
// * Add an element to the back of an array.
// * Remove an element from the back of an array.
// * Add an element to the front of an array.
// * Remove an element from the front of an array.
// * Concatenates all the elements in an array into a string.
// * Separates the characters of a string into an array. This one is a string method.

// What will the contents of the below arrays be after the code samples are executed? Come up with an answer yourself before testing it out in the console.

var numbers = [2, 4, 6, 8]
Console.log(number)

numbers.pop()//8
numbers.push(10)//4 provides the number of the nuew array
numbers.unshift(3)//5

// Your answer goes here.

// What is the return value of the below code sample? Come up with an answer yourself before testing it out in the console.

var morse = ["dot", "pause", "dot"]
var moreMorse = morse.join(" dash ")
moreMorse.split(" ")
dot dash pause dash dot
// Your answer goes here.
(23) ['d', 'o', 't', ' ', 'd', …]
// What will the contents of the below array be after the below code sample is executed? Come up with an answer yourself before testing it out in the console.

var bands = []
var beatles = ["Paul", "John", "George", "Pete"]
var stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
bands.push(beatles)//1
bands.unshift(stones)//2
bands[bands.length - 1].pop()//Pete
bands[0].shift()//Brian
bands[1][3] = "Ringo"//1
: 
(4) ['Paul', 'John', 'George', 'Ringo']

// Your answer goes here.

// Booleans & Comparison Operators

// Write your expected result for the OR and AND operations below each statement. Fact check yourself with browser console.

// OR
true||true
// Prediction:
// Actual:
true
true||false
// Prediction:
// Actual:
true
false||true
// Prediction:
// Actual:
true
false||false
// Prediction:
// Actual:
false
3||3
// Prediction:
// Actual:
3
1||5
// Prediction:
// Actual:
1
// AND
true&&true
// Prediction:
// Actual:
true
true&&false
// Prediction:
// Actual:
false
false&&true
// Prediction:
// Actual:
false
false&&false
// Prediction:
// Actual:
false
3&&3
// Prediction:
// Actual:
3
1&&5
// Prediction:
// Actual:
5
// Chained Logic

// Chain some logic together to create a function
// A 'dog' object looks like this dog = { weight, canSit, canShake }
// You are giving dogs treats. Large dogs over 50 pounds get bones, small dogs undere 50 pounds get biscuits.
// If a dog is large (over 50 pounds), print out "Have a bone!".
// If a dog is small (under 50 pounds), print out "Have a biscuit!"

function giveDogATreat(dog) {
    // You logic goes here
weight: 51
canSit: true
canShake: true
if (dog.weight > 50) {
console.log("Have a bone")
}else{ console.log("have a biscuit!")
}
}

// Now a dog must sit or shake to get a treat
// Check the canSit or canShake variables
// If the dog can sit or shake, give them a treat as usual
// If the dog can't sit or shake, teach them to sit or shake by updating their attributes and then check again

function giveDogATreatAfterTrick(dog) {
    // Your logic goes here
}
