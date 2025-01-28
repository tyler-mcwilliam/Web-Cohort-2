// Web Cohort 1 Exercise 1

// For each expression, predict what you think the output will be in a comment (`//`) ***without first running the command***. Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

// trying to submit again again
typeof("potato")
// Prediction: Vegetable
// Actual: String

// What is the output of each of the expressions below?

typeof(15)
// Prediction:Number Number
// Actual:Number

typeof(5.5)
// Prediction:Number 
// Actual:Number

typeof(NaN)
// Prediction:Null or Number
// Actual:Number

typeof("hello")
// Prediction:Text
// Actual:String

typeof(true)
// Prediction:Boolean
// Actual:Boolean

typeof(1 != 2)
// Prediction:Boolean
// Actual:Boolean


"hamburger" + "s"
// Prediction:hamburgers
// Actual:hamburgers

"hamburgers" - "s"
// Prediction:hamburger
// Actual:hamburger

"1" + "3"
// Prediction:4
// Actual:13

"1" - "3"
// Prediction:-2
// Actual:-2

"johnny" + 5
// Prediction:johnny5
// Actual:johnny5

"johnny" - 5
// Prediction:No clue
// Actual:NaN

99 * "luftbaloons"
// Prediction:NaN
// Actual:NaN

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
numbers.pop()
numbers.push(10)
numbers.unshift(3)

// 8, 4, 5

// What is the return value of the below code sample? Come up with an answer yourself before testing it out in the console.

var morse = ["dot", "pause", "dot"]
var moreMorse = morse.join(" dash ")
moreMorse.split(" ")

// ["dot",
    "dash",
    "pause",
    "dash",
    "dot"]

// What will the contents of the below array be after the below code sample is executed? Come up with an answer yourself before testing it out in the console.

var bands = []
var beatles = ["Paul", "John", "George", "Pete"]
var stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
bands.push(beatles)
bands.unshift(stones)
bands[bands.length - 1].pop()
bands[0].shift()
bands[1][3] = "Ringo"

// 1, 2, Pete, Brian, Ringo

// Booleans & Comparison Operators

// Write your expected result for the OR and AND operations below each statement. Fact check yourself with browser console.

// OR
true||true
// Prediction:True
// Actual:true

true||false
// Prediction:true
// Actual:true

false||true
// Prediction:false
// Actual:true

false||false
// Prediction:false
// Actual:false

3||3
// Prediction:3
// Actual:3

1||5
// Prediction:1 or 5
// Actual:1

// AND
true&&true
// Prediction:true
// Actual:true

true&&false
// Prediction:true
// Actual:false

false&&true
// Prediction:false
// Actual:false

false&&false
// Prediction:false
// Actual:false

3&&3
// Prediction:3
// Actual:3

1&&5
// Prediction:1
// Actual:5

// Chained Logic

// Chain some logic together to create a function
// A 'dog' object looks like this dog = { weight, canSit, canShake }
// You are giving dogs treats. Large dogs over 50 pounds get bones, small dogs undere 50 pounds get biscuits.
// If a dog is large (over 50 pounds), print out "Have a bone!".
// If a dog is small (under 50 pounds), print out "Have a biscuit!"

var dog = {
    weight: 88
    canSit: true
    canShake: false
} 

function giveDogATreat(dog) {
    // You logic goes here
return if (dog weight > 50) {console.log("Have a bone!") 
    else 
{return console.log("Have a biscuit!")}
}

// Now a dog must sit or shake to get a treat
// Check the canSit or canShake variables
// If the dog can sit or shake, give them a treat as usual
// If the dog can't sit or shake, teach them to sit or shake by updating their attributes and then check again

function giveDogATreatAfterTrick(dog) {
    // Your logic goes here
}
