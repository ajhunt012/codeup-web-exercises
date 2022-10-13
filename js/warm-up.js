(function(){
    "use strict";


    //Warm-up:

    //Write a function that takes in a number and returns the number passed multiplied by the number 5.
    // If we pass anything other than a number into the function, the function should return the number 0.


    function multiplyChoice(numberChoice) {
        if (typeof numberChoice === isNaN) {
            return (0);
        } else {
            return (numberChoice * 5)
        }
    }

    console.log(multiplyChoice(5));
    console.log(multiplyChoice('5'));
    console.log(multiplyChoice("five"));
    console.log(multiplyChoice(0));
    console.log(multiplyChoice(2.5));


    const multFive = (x) => {
        if (parseFloat(x) !== x){
            return 0
        }
        return x*5
    }

    function numMultipliedFive(){
        let typeNum = Number(prompt("what is your num?"));
        if(isNaN(typeNum)){
            alert("0");
        } else {
            alert(typeNum * 5);
        }

    }
    numMultipliedFive();


// Write a function named "inBetween" that accepts three inputs: min, max, num, and returns a boolean determining whether or not the "num" parameter is in between the min and max numbers.
//
//     EX:
// inBetween(1, 10, 5) returns true
// inBetween(25, 26, 25) returns false
// inBetween(0, 1, 0.5) returns true


function inBetween(min, max, num) {
    return num > min && num < max;
}
    console.log(inBetween(1, 10, 5));
    console.log(inBetween(25, 26, 25));
    console.log(inBetween(0, 1, 0.5));



})();
