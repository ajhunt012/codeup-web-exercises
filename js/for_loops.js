(function() {
    "use strict";

    function showMultiplicationTable(num) {
        console.log(num * 1)
        console.log(num * 2)
        console.log(num * 3)
        console.log(num * 4)
        console.log(num * 5)
        console.log(num * 6)
        console.log(num * 7)
        console.log(num * 8)
        console.log(num * 9)
        console.log(num * 10)
    }
    showMultiplicationTable(7);


        for (let x=1; x<=10; x++) {
            let random = Math.floor(Math.random() * 200) + 20;
            if (random % 2 == 0) {
                console.log(random + " This number is even");
            }
            else {
                console.log(random + " This number is odd");
            }
        }


        for (let i=1; i<=9; i++){
            let pyramid = "";
            for (let m=1; m<=i; m++) {
                pyramid+=i
            }
            console.log(pyramid)
        }


        for (let i=100; i>=5; i-=5) {
            console.log(i);
        }

})();




