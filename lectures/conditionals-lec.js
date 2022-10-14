"use strict";
(function() {

    // if Statement - allows you to execute code based on certain conditions.
    // if conditions are not met then the code in the curly braces will not execute.

    //if statement condition will ALWAYS be a boolean

    // if(true) {
    //     console.log("Run this code!")
    // }

    // if / else statements - in addition to the if statement, the else will block will run if the condition is not met

    if (true) {
        // condition evaluates to true, run this code
        console.log("the code evaluates to true");
    } else {
        //condition evaluates to false, run this code.
        console.log('The conditon evaluates to false!');
    }

    let currentShow = prompt('What show are you currently watching?')
    // the .lowerCase will help rid of uppercase issues to titles

    if (currentShow.toLowerCase() === "House of Dragons") {
        console.log("I love that show!");
    } else {
        console.log("I havent seen that show just yet.");
    }

    // 1. Create two string variables one for password and one for username.
    // 2. Create two more variables named userUsername and userPassword that prompt the user to enter in their credentials.
    // 3. Create an if statement and log to the console if the user enters the correct information.
    // 4. If the username matches the user, AND the password matches the user password, log to the console that they have successfully logged in. Otherwise, log to the console that the credentials are incorrect.

    // example
    // username = "Jayman"
    //password = "password1"

    let username = "Jayman";
    let password = "Password1";
    let userUsername = prompt("What is your username?");
    let userPassword = prompt("What is your password?");

    if ((password === userPassword) && (username === userUsername)) {
        console.log("Successfully logged in.");
    } else {
        console.log("User credentials are incorrect!")
    }


    // // if/else if/else
    // if(condition) {
    //     // if condition evaluates to true, run this;
    // } else if (condition2) {
    //     //if second condition is true, run this;
    // } else (all others){
    //     //in no conditions are met run this;
    //
    // }

    //Teacher is dismissing students by clothing that they're wearing.
    let shoes = "red";
    let shirt = "hawaiian";
    let jeans = "denim";
    let jacket = true;

    if (shoes === 'red') {
        console.log("if youre wearing red shoes go to reccess.");
    } else if (shirt === "hawaiian") {
        console.log('you\'re dismissed.');
    } else if (jeans === "denim") {
        console.log('you are dismissed');
    } else if (jacket) {
        console.log("take of the jacket and go.");
    } else {
        console.log("Everyone else get out.");
    }


    let num = 10

    if (num % 2 === 0 && num % 5 === 0)

// do not use one of these if you will do more than one line or one else of code.

    let myName = "Austin" ? myName === 'Austin' ? "Hello," + myName : "Hello, Stranger!";

    // Is the same as
    if (myName === 'Austin') {
        console.log("Hello," + myName);
    } else {
        console.log("Hello ,Stranger.");
    }

// switch statements

    let menu = prompt('1. cheesburger \n2. chicken sandwich \n3. chilli cheese fries\n4. philly cheesesteak');

    switch (menu) {
        case '1':
            alert("The cheeseburger combo is $5.99")
            break;
        case '2':
            alert("The chicken sandwich is freshly made, and cost $4.99.")
            break;
        case '3':
            alert("The chilli cheese fries, come with jalapenos and cost $3.99.")
            break;
        case '4':
            alert("The philly cheesesteak is done the 'Texas Way' and is $7.99.")
            break;
        default:
            alert("I'm Sorry that is not a menu item.");

        // Without the breaks the code will run and give all results to the intended function or user.

    }

    // let menu
    // +prompt('1. cheesburger \n2. chicken sandwich \n3. chilli cheese fries\n4. philly cheesesteak');
    // if (menu === '1') {
    //     alert("The cheeseburger combo is $5.99")
    // }
    // if else
    // (menu === '2')
    // {
    //     alert("The chicken sandwich is freshly made, and cost $4.99.");
    // }
    // if else
    // (menu === '3')
    // {
    //     alert("The chilli cheese fries, come with jalapenos and cost $3.99.")
    // }
    // if else
    // (menu === '4')
    // {
    //     alert("The philly cheesesteak is done the 'Texas Way' and is $7.99.")
    // }else {
    //     alert("I'm Sorry that is not a menu item.");
    // }


    })();