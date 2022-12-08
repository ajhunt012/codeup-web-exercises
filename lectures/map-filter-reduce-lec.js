let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even;
// let squaredNumbers;

even = numbers.filter((num) => num % 2 === 0);

console.log(numbers);
console.log(even);

squaredNumbers = numbers.map((n) => {
    console.log(n)
    return n ** 2;
})

console.log(squaredNumbers)


const ticketSales = [
    {name: "One piece red", sale: 10},
    {name: "back to the future", sale: 20},
    {name: "ip man", sale: 5}
]

const totalTicketsSold = ticketSales.reduce(function (total, movie){
    return total + movie.sale;
}, 0)

console.log(totalTicketsSold)