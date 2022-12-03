// let animeQuote = fetch('https://animechan.vercel.app/api/random')

// let gitHubUsers = fetch('https://api.github.com/users');

//will handle all promises
// Promise.all([animeQuote, gitHubUsers]).then(function (data){
//     console.log(data)
// }).catch(function (error){
//     console.log(error)
// })

//will return first resolved promise
// Promise.race([animeQuote, gitHubUsers]).then(function (data){
//     console.log(data)
// }).catch(function (error){
//     console.log(error)
// })


// Promise.resolve('one').then((one) => {
//     console.log(one);
//     return 'the number two';
// }).then((two) => {
//     console.log(two);
//     return 'three';
// }).then((three) => {
//     console.log(three);
// });

// function getAnimeQuote() {
//     return fetch('https://animechan.vercel.app/api/random').then((response) => {
//        return response.json().then((data) => {
//            console.log(data.quote);
//        });
//     })
//
// }

// console.log(getAnimeQuote());
// fetch('https://api.github.com/users').then( response => {
//     response.json().then( users => {
//         console.log(users);
//         users.forEach( user => {
//             // do something with each user object...
//             console.log(user.login);
//         });
//     });
// });

// const myPromise = new Promise((resolve, reject) => {
//     if (Math.random() > 0.5) {
//         resolve();
//     } else {
//         reject();
//     }
// });
//
// myPromise.then(() => console.log('resolved'));
// myPromise.catch(() => console.log('rejected'));