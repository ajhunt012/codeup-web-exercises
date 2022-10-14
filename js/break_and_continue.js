(function(){
    "use strict";

    //Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

    let userNumber = parseFloat(prompt('Please enter a number between 1 and 50.'));

    for (let i = 0; i < 50; i++ ) {
        //
        if (isNaN(userNumber) || userNumber > 50 || userNumber < 1) {
            break;
        }
        if (i === userNumber) {
            console.log(i + " Yikes, skipping this number!")
            continue;
        }

        if (i % 2 !== 0) {
            console.log(i + " This is an odd number!")
        }


    }

})();