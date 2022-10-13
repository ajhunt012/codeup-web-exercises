"use strict"
//functions lecture and testing.

//function(argument)
//somefuntctions can accept a number of arguments

//some arguments are
//prompt(whats your name)(optional)

//some are meant to store variables
//let littleMermaid = prompt("how many days did you rent this movie?")

// execute functions - definition vs execution

//without partenthsis it will show the functions definition.
//console.log(parseInt)

//with parenthisis it will execute the function.
//console.log(parseInt("42"))

// function add(num1, num2) {
// return num1 + num2
//}

//function add(num1, num2) => num1 +num2
//both function the same way => is acting as a return and generally used   instance where the function is doing one specific task.

// ================ !! Mini-exercises !!

// Write a function, returnFive, that returns the number five. No inputs should be defined.



// Write a function, isFive, that takes in an input and returns the boolean value true if the passed argument is the number 5 or the string "5". Return false otherwise.

// how many inputs should the function have?
// what are the data types for the inputs?
// what is the data type of the output/return value?


// Write a function, isShortWord, that takes in a string and returns the boolean value true if the passed argument is shorter than 5 characters. Return false otherwise.

// how many inputs?
// what data type for inputs?
// what is the return type?


// Write a function, isSameLength, that takes in two string inputs and returns the boolean value true if the passed arguments are the same length. Return false otherwise.

// How many inputs?
// What type of input?
// What type of output?

function returnFive() {
    return 5
}
console.log(returnFive());

    function isFive(number) {
    return number === 5 || number ==='5'
}
    console.log(isFive(1))
    console.log(isFive(2.5))
    console.log(isFive(5))
    console.log(isFive('5'))
    console.log(isFive('five'))
    console.log(isFive(5.0))

    const isShortWord = (string) => string.length <5;
    console.log(isShortWord("Hi"))
    console.log(isShortWord("Hello"))
    console.log(isShortWord("Welcome"))
    console.log(isShortWord("Howdy"))


    function isSameLength(string1,string2) {
    return string1.length === string2.length
}
    console.log(isSameLength("seven", "Hello"));
    console.log(isSameLength("red", "solo"));
    console.log(isSameLength("blue", "pizza"));
    console.log(isSameLength("howdy", "hello"));

    let globalVar = "Hello , I'm a global";

    function test(variable) {
    let localVar = "Hello, I'm local!"
    console.log(globalVar);
}
    test();

    console.log(localVar);
