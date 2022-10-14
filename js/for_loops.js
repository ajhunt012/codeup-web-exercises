(function() {
    "use strict";

    function showMultiplicationTable(num){
    for(let i = 1; i <= 10; i++ ) {
        console.log(num + ' X ' + i + " = " + num * i);
    }
    }
    showMultiplicationTable(7)

    // function showMultiplicationTable(num) {
    //     console.log(num * 1)
    //     console.log(num * 2)
    //     console.log(num * 3)
    //     console.log(num * 4)
    //     console.log(num * 5)
    //     console.log(num * 6)
    //     console.log(num * 7)
    //     console.log(num * 8)
    //     console.log(num * 9)
    //     console.log(num * 10)
    // }
    // showMultiplicationTable(7);

// random generator taken from conditionals exercise


        for (let i=1; i <= 10; i++) {
            let randomNum = Math.floor((Math.random() * (200 -20)) + 20);
            if (randomNum % 2 == 0) {
                console.log(randomNum + " This number is even");
            }
            else {
                console.log(randomNum + " This number is odd");
            }
        }

        for( let i = 1; i < 10; i++){
            console.log(i.toString().repeat(i));
            //console.log('${i}'.repeat(i));  need to fix to work but is an option.
        }

        // for (let i=1; i<=9; i++){
        //     let pyramid = "";
        //     for (let x=1; x<=i; x++) {
        //         pyramid+=i
        //     }
        //     console.log(pyramid)
        // }


        for (let i = 100; i >= 5; i -= 5) {
            console.log(i);
        }

})();




