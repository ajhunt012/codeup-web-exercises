//1. Define a function named lowerCase that takes in an input and returns that input as a string in all lower case letters. Returns false if the input passed is not a string.
// lowerCase('CODEUP')                             // codeup
// lowerCase('George WashingTon')                  // george washington
// lowerCase(0)                                    // false
// lowerCase(true)                                 // false
// lowerCase('BoBby')                              // bobby
// lowerCase(null)                                 // false
// lowerCase([1,2,3])                              // false
// lowerCase({fName: 'Bruce', lName: 'Wayne'})     // false

//My Answer: 100%
// function lowerCase(string){
//     if (typeof string === "string") {
//         return string.toLowerCase()
//     } else {
//         return false
//     }
// }


//2. Define a function named isAllLowerCase that takes in a string and returns true if all characters in the string are lowercase otherwise it should return false.
// isAllLowerCase('codeup')                            // true
// isAllLowerCase('hello there')                       // true
// isAllLowerCase('BoBby')                             // false
// isAllLowerCase('George WashingTon')                 // false
// isAllLowerCase(0)                                   // false
// isAllLowerCase(true)                                // false
// isAllLowerCase(null)                                // false
// isAllLowerCase([1,2,3])                             // false
// isAllLowerCase({fName: 'Bruce', lName: 'Wayne'})    // false

//My answer: 100%
// function isAllLowerCase(string){
//     if (typeof string !== "string"){
//         return false;
//     } else if (string !== string.toLowerCase()) {
//         return false
//     } else {
//         return true
//     }
//
// }

or = {};

// function isAllLowerCase(str){
//     if(isString(str)){
//         return str.toLowerCase() === str;
//     }
// }
or = {};
//  return typeof str === "string && str === str.toLowerCase();

//3. Define a function named isAllUpperCase that takes in a string and returns true if all characters in the string are uppercase otherwise it should return false.
// isAllUpperCase('CODEUP')                            // true
// isAllUpperCase('HELLO THERE')                       // true
// isAllUpperCase('BoBby')                             // false
// isAllUpperCase('codeup')                            // false
// isAllUpperCase('George WashingTon')                 // false
// isAllUpperCase(0)                                   // false
// isAllUpperCase(true)                                // false
// isAllUpperCase(null)                                // false
// isAllUpperCase([1,2,3])                             // false
// isAllUpperCase({fName: 'Bruce', lName: 'Wayne'})    // false

//My answer: 100%
// function isAllUpperCase(string){
//     if (typeof string !== "string"){
//         return false;
//     } else if (string !== string.toUpperCase()) {
//         return false
//     } else {
//         return true
//     }
// }

//4. Define a function named isNotPalindrome that takes in a string and returns true if that string is not palindrome, if the string is palindrome should return false.
// isNotPalindrome('Kayak')                             // false
// isNotPalindrome('George WashingTon')                 // true
// isNotPalindrome(0)                                   // true
// isNotPalindrome(true)                                // true
// isNotPalindrome('civic')                             // false
// isNotPalindrome(null)                                // true
// isNotPalindrome()                                    // true
// isNotPalindrome([1,2,3])                             // true
// isNotPalindrome({fName: 'Bruce', lName: 'Wayne'})    // true

//My answer:50%
//https://www.freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/ (isNotPalindrome)
// function isNotPalindrome(str) {
//     let re = /[^A-Za-z0-9]/g;
//     str = str.toLowerCase().replace(re, '');
//     let len = str.length;
//     for (var i = 0; i < len/2; i++) {
//         if (str[i] !== str[len - 1 - i]) {
//             return true;
//         }
//     }
//     return false;
// }

or = {};

function isNotPalindrome(str) {
    if (typeof str === "string") {
        let arr = str.split("");
        arr = arr.reverse();
        return arr.join("").toLowerCase() !== str.toLowerCase();
    }
    return true;
}


// 5.Define a function named multiplyBy2 that takes in an input and multiplies it by 2 if the input is numeric. If the input is Not A Number, then return false.
// multiplyBy2(2)                     // 4
// multiplyBy2("4")                   // 8
// multiplyBy2("-5.5")                // -11.0
// multiplyBy2(5.5)                   // 11
// multiplyBy2(null)                  // false
// multiplyBy2(true)                  // false
// multiplyBy2(false)                 // false

//My answer:
// function multiplyBy2(num) {
//     if (typeof num !== 'number'){
//         return false;
//     } else {
//         return (parseFloat(num)*2)
//     }
// }

function multiplyBy2(input) {
    if (!isNaN(parseFloat(input))) {
        return input * 2
    }
    return false;
}

//------simplified version-----//

function isNumeric(input) {
    return !isNaN(parseFloat(input));
}


//6.Define a function named convertHourToSec that takes in one input Hours. Return the conversation of the number of hours into total seconds. If the input is not numeric or a numeric string, convertHourToSec, should return false.
// convertHourToSec(0)                 // 0
// convertHourToSec(1)                 // 3600
// convertHourToSec(1.5)               // 5400
// convertHourToSec(true)              // false
// convertHourToSec(-1)                // false
// convertHourToSec(null)              // false
// convertHourToSec("2")               // 7200

//My answer:
// function convertHourToSec(time) {
//     if (typeof time !== 'number' || time < 0){
//         return false;
//     }else {
//         return ((parseInt(time) * 60) * 60);
//     }
// }

function convertHourToSec(time) {
    if (isNumeric(time) &&  time >= 0) {
        return ((parseInt(time) * 60) * 60);
    }
}


// 7.Write a function named getLowestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the lowest number. If any of the 3 inputs is missing or non-numeric, then return false.
// getLowestNumber(1, 3, 2)            // 1
// getLowestNumber("0", 1, 2)          // 0
// getLowestNumber(9, 3, -20)          // -20
// getLowestNumber(2, 2, 2)            // 2
// getLowestNumber(2, 5, 5)            // 2
// getLowestNumber(1, 2, 'x')          // false
// getLowestNumber("a", "b")           // false
// getLowestNumber()                   // false

//My answer:
// function getLowestNumber(argue1, argue2, argue3) {
//     if (typeof argue1 !== "number" || typeof argue2 !== "number" || typeof argue3 !== "number") {
//         return false
//     } else if (argue1 < argue2 && argue1 < argue3) {
//         return Number(argue1);
//     } else if (argue2 < argue1 && argue2 < argue3) {
//         return Number(argue2);
//     } else if (argue3 < argue2 && argue3 < argue1) {
//     } return Number(argue3)
// }

function getLowestNumber(num1, num2, num3) {
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    num3 = parseFloat(num3)
    if (isNumeric(num1) && isNumeric(num2) && isNumeric(num3)) {
        return Math.min(num1, num2, num3);
    }
    return false;
}


// 8. Write a function named addStringLengths that takes in two inputs. If both inputs provided are strings, addStringLengths returns the sum after adding the length (number of characters) of both strings. If either or both inputs are not strings, return false.
// addStringLengths(1, 2)                       // false
// addStringLengths("code", "up")               // 6
// addStringLengths("1 2 3", "4 5 6")           // 10
// addStringLengths("ranking", 1)               // false
// addStringLengths(null, null)                 // false
// addStringLengths(true, false)                // false
// addStringLengths(["code", "up"], "rocks!")   // false
// addStringLengths("", ""));                   // 0

//My answer:
// function addStringLengths(str1, str2){
//     if (typeof str1 !== 'string' || typeof str2 !== "string") {
//         return false;
//     } else {
//         return str1.length + str2.length
//     }
// }

function addStringLength(str1, str2){
    if(isString(str1) && isString(str2)) {
        return str1.length - str2.length
    }
    return false;
}



//9. Write a function named subtract that takes in two inputs. If both inputs provided are numeric or numeric strings, subtract will return the difference when the second input is subtracted from the first input. If one or both inputs is not numeric or numeric strings, subtract should return false.
// subtract(10, 2)                     // 8
// subtract(0, 0)                      // 0
// subtract(-4, 1)                     // -5
// subtract("10", 2)                   // 8
// subtract(5, true)                   // false
// subtract(true, false)               // false
// subtract("Monday", "Tuesday")       // false
// subtract()                          // false

//My answer:
// function subtract(num1, num2) {
//     if (/^\d+$/.test(num1) !== true || /^\d+$/.test(num2) !== true){
//         return false;
//     } else {
//         return Number(num1)- Number(num2);
//     }
// }

function subtract(num1, num2) {
    if (isNumeric(num1) && isNumeric(num2)) {
        return num1 - num2;
    }
    return false;
}


//10. Write a function named calculateChange that takes in two inputs, totalPaid and totalCost. If both inputs are numeric or numeric strings, calculateChange should return the change after subtracting the cost from the amount paid. The return should be in $x.xx format as a string Note: it should return with two decimal places. If either or both inputs are not numeric or numeric strings, calculateChange should return false.
// calculateChange(7.50, 1.50)         // $6.00
// calculateChange(10, 5)              // $5.00
// calculateChange("100", 50)          // $50.00
// calculateChange(10, true)           // false
// calculateChange([1, 2, 3], 10)      // false
// calculateChange("Codeup", 100)      // false
// calculateChange()                   // false

//My answer:
// function calculateChange(num1, num2) {
//     if (/^\d+$/.test(num1) !== true || /^\d+$/.test(num2) !== true){
//         return false;
//     } else {
//         return toFixed((parseFloat(num1) - parseInt(num2)));
//     }
// }

function calculateChange(num1, num2) {
    if (isNumeric(num1) && isNumeric(num2)) {
        return `$${num1 - num2.toFixed(2)}`
    }
    return false;
}