let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//adds to the end of the array.
nums.push(11)
//adds to the beginning of the array.
nums.unshift(-5, -4, -3, -2, -1, 0)

//can insert or remove multiple elements to the array at one time.
nums.push(12, 13, 14)

//this will return the length of the NEW array and not the previous length or the full array.
console.log(nums.push(15))

//removes the last object in the array.
nums.pop();

//will return the items that the functions removed.
console.log(nums.shift())
console.log(nums.pop())

// starts at the beginning of an array and looks for the first instance of the provided elements.
index = nums.indexOf(5);
console.log(index);
//index of 9

//starts at the end of the array and looks for the first instance of asked for element and returns the index of.
index = nums.lastIndexOf(10);
console.log(index);
//index of 14

// splitting removes the nums from the array starting with the index provided and deletes everything past the second num.
// let split = nums.split(9, 14);
// console.log(split)

//first argument deletes everything before that index, second num removes everything after and the index. use negatives to go backwards in the equation.
console.log(nums.slice(2, 4));


//removes and stores everything between the first index provided and how many index past you dictate.
console.log(nums.splice(2, 5))

// simply reverses and reassigns the array.
nums.reverse()

// will sort strings alphabetically, and will return numbers by lowest to the highest starting with the first digit, and then the second, and so on.
let numbers = [0, 1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 8, 9, 10, 11, 22, 21, 80, 88, 89, 100]
console.log(numbers.sort());
console.log(nums);


//split separator will find the "letter", removes and separates the array.
let namesString = "Joe, Bob, Sally";

console.log(namesString);
// Joe,Bob,Sally

let namesArray = namesString.split(',');

console.log(namesArray);


//Joining methods written out.
let namedArray = ['Joe', 'Bob', 'Sally'];

console.log(namedArray);
// ['Joe', 'Bob', 'Sally']

let namedString = namedArray.join(', ');

console.log(namedString);
// Joe,Bob,Sally


