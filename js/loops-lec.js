
(function() {
    "use strict";

    // let i = 10;
    //
    // while(i < 10) {
    //     console.log(i);
    //     i++;
    // }
    // console.log("broken out of loop.")

    // do while example.

    // do {
    //     console.log(i);
    //     i++;
    //     console.log(i)
    // }while(i < 10)

    //will cause the code to run forever and cause crashes.

    // do {
    //     console.log(i);
    //     i++;
    //     console.log(i)
    // }while(i > -1)

    // let num = 0;
    //
    // while (num < 100) {
    //     console.log(num);
    //     num = num + 5;
    // }
    //
    //
    // do {
    //     num = num + 5;
    //     console.log(num)
    // }while (num < 100);

    //
    // for (var i = 0; i < 10; i++) {
    //     console.log('for loop iteration #' + i);
    // }
    //
    // for(var num = 0; num < 100; num +=5 ){
    //     console.log(num);
    // }

// for(let i = 0; i < 100; i +=5) {
//     console.log(i);
//     break;
//     console.log("never to be reached, due to break.")
//     }

    // for(let i = 0; i < 100; i +=5) {
    //     console.log(i);
    //     if( i === 50){
    //         break;
    //     }
    // }

    // for(let i =0; i<50; i++) {
    //     console.log(i)
    //
    //     if(i % 2 ===0){
    //         continue
    //     }
    //     let value= i+1
    //     console.log(i +" is an odd number." );

    for(let i =0; i<50; i++) {
        if(i % 2 ===0){
            console.log(i +" is an even number." );
            continue
        }
        console.log(i);
    }

    // for - loops through a block of code a number of times

    // for/in - loops through the properties of an object

    // for/of - loops through the values of an iterable object

    // while - loops through a block of code while a specified condition is true

    // do/while - also loops through a block of code while a specified condition is true

})();

