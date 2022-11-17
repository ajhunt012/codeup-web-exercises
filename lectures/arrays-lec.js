"use strict"
let array= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// let helloArray =['hello', 'hi', 'howdy'];
// let statments= [true, false, null, void] ;

// console.log(shapes.length)
// console.log(array.length)
// console.log(shapes[0])
// console.log(array[0])
// console.log(array.lastIndexOf(7))

let shapes = ['square', 'cube', 'sphere', 'triangle']
let names = ['jim', 'joe', 'john','Jimmithy', 'jill', 'jane', 'jack']

let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(newArr)

for(let i = 0; i < shapes.length; i++) {
    console.log("The shapes provided were: " + shapes[i])
}

for(let i = 0; i < 10; i++ ) {
    console.log("The number at index " + i + ' is ' + array[i]);
}

for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

let lastIndex = names.length -1
for( let i = lastIndex; i >= 0; i--) {
    console.log(names[i]);
}
// names.forEach(function(element, index, array))
names.forEach(function(names) {
    console.log("Some real good names are, " + names)
});
Array.isArray(names);
// will return a boolean checking for Array as it shows as an object.


//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. This method returns an array containing the deleted elements.
names.splice(2, 1, "Jamie");
console.log(names);


