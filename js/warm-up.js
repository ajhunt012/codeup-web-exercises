(function() {
    "use strict";


    //Warm-up:

    //Write a function that takes in a number and returns the number passed multiplied by the number 5.
    // If we pass anything other than a number into the function, the function should return the number 0.

    //
    // function multiplyChoice(numberChoice) {
    //     if (typeof numberChoice === isNaN) {
    //         return (0);
    //     } else {
    //         return (numberChoice * 5)
    //     }
    // }
    //
    // console.log(multiplyChoice(5));
    // console.log(multiplyChoice('5'));
    // console.log(multiplyChoice("five"));
    // console.log(multiplyChoice(0));
    // console.log(multiplyChoice(2.5));
    //
    //
    // const multFive = (x) => {
    //     if (parseFloat(x) !== x){
    //         return 0
    //     }
    //     return x*5
    // }
    //
    // function numMultipliedFive(){
    //     let typeNum = Number(prompt("what is your num?"));
    //     if(isNaN(typeNum)){
    //         alert("0");
    //     } else {
    //         alert(typeNum * 5);
    //     }
    //
    // }
    // numMultipliedFive();


// Write a function named "inBetween" that accepts three inputs: min, max, num, and returns a boolean determining whether or not the "num" parameter is in between the min and max numbers.
//
//     EX:
// inBetween(1, 10, 5) returns true
// inBetween(25, 26, 25) returns false
// inBetween(0, 1, 0.5) returns true

//
// function inBetween(min, max, num) {
//     return num > min && num < max;
// }
//     console.log(inBetween(1, 10, 5));
//     console.log(inBetween(25, 26, 25));
//     console.log(inBetween(0, 1, 0.5));


    // Morning Warm-Up:
    //
    // Create a function named "typePrinter" that accepts an array as an input, and logs the data type of each element to the console.
    //
    let arr = [true, "Icon", 25, "66", false, 0];

    function typePrinter(userArr) {
        for (let i = 0; i < userArr.length; i++) {
            console.log(typeof (userArr[i]));
        }
    }

    typePrinter(arr);


    // arr.forEach(function(arr) {
    //     console.log (typeof (arr))
    // });

    // Warm-Up:
    //
    // Create a function named "average" that takes in an array of numeric values, and returns the average. If any of the elements in the array are non-numeric, the function should return false.
    //
    //     Ex:

    function isNumeric(input) {
        return !isNaN(parseFloat(input));
    }


    console.log(average(["6", 5, 3, 2, 9]));                       // returns 5
    console.log(average([true, 6, 9, 3, 10]));                     // returns false
    //average(array:[{name: "Codey the Duck}, 10, 3, false])
    console.log(average([1, 2, 3, 4, 5]));                            // returns 3
    console.log(average(["5.5", "five", 3, 6, 7]));                      // returns false


    function average(array) {
        let i = 0;
        let sum = 0;
        while (i < array.length) {
            if (isNumeric(array[i])) {
                sum += parseFloat(array[i]);
                i++;
            } else {
                return false;
            }
        }
        return sum / array.length;
    }


    // Warm-up:
    //
    // Create a function named "filterNegativity" that accepts an array of numbers, and returns an array with only positive numbers.
    //
    //     Ex: filterNegativity([5, -6, 2, 0, -5, -13]) // returns [5, 2, 0,]
    let myArr = [5, -6, 2, 0, -5, -13];


    const filterNegativity = (array) => {
        let posArray = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i] >= 0) {
                posArray.push(array[i])
            }
        }
        return posArray;
    }

    //or you can use a filter method

//     function filterNegativity(array) {
//     let passedArray = array.filter(num => num > -1)
//     return passedArray;
// }


console.log(filterNegativity(myArr));


})();
