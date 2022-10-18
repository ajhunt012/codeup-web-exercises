"use strict";

// let car = new Object();
// let cup = new Object();
//
// let car ={};
//also turns variable: car into an object.


// console.log(typeof car);
//object

// let book ={};
// book.title = ("Moby Dick");
// book.author = ("Captain Ahab");
// book.title = ("Moby Dick, Remastered edition");
// book["volumes"] = [3, 4];
// book["volume"] = 3;
// book["volume"] = 4;

// console.log(book);
// { title: 'Moby Dick, Remastered edition', author: 'Captain Ahab', volume: [3, 4] }
// console.log(book.author);
// Captain Ahab
// console.log(book['title']);
// Moby Dick, Remastered edition


//objects can be stored into arrays, and arrays can be stored in objects, and objects can be stored in objects.
let publishedWorks = {
    bookTitles: ['Moby Dick', 'Redburn', 'White-Jacket']
}

let authorObj = {
    name: "Herman Melville",
    works: publishedWorks
}
let book = {
    title: "Moby Dick",
    author: authorObj,
    volume: 1
};


console.log(book);
console.log(book.title);
console.log(book["title"]);
console.log(book.author.name);
//will call up an object through the object of book.
console.log(book.author.works.bookTitles);


// let cars = [
//     {
//         make: "Toyota",
//         model: "Camry",
//         features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
//         owner: {
//             name: "Jane Doe",
//             age: 30
//         }
//     },
//     {
//         make: "Honda",
//         model: "Accord",
//         features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
//         owner: {
//             name: "John Doe",
//             age: 31
//         }
//     }
// ];
//
// console.log("The first car is a " + cars[0].make + " " + cars[0].model + ".");
// console.log("The owner of the second car is " + cars[1].owner.name + ".");
//
// console.log("Here are all the features of all the cars:");
// cars.forEach(function(car) {
//     car.features.forEach(function(feature) {
//         console.log(feature);
//     });
// });

var car = {};
car.make = "Toyota";
car.model = "Camry";

// create a honk method on the car object
car.honk = function () {
    alert("Honk! Honk!");
};

// honk the horn
car.honk();


