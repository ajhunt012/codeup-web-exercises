"use strict";
(function(){

    //Warm-up:

    //Write a function that takes in a number and returns the number passed multiplied by the number 5.
    // If we pass anything other than a number into the function, the function should return the number 0.


    function multiplyChoice(numberChoice) {
        if (typeof numberChoice !== isNaN) {
            return (0);
        } else {
            return (numberChoice * 5)
        }
    }

    console.log(numberChoice(5) );
    console.log(numberChoice('5') );
    console.log(numberChoice("five"));
    console.log(numberChoice(0));
    console.log(numberChoice(2.5));


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

    };
    numMultipliedFive();


})();
