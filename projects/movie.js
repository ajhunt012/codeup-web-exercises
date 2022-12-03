const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming",
    "method": "GET",
    "headers": {
        "X-RapidAPI-Key": "5cd433487cmsh62ff22a34e2f3ecp101cccjsn10f6521d0525",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com"
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
});

// searchFunction => function (fetch ("https://moviesdatabase.p.rapidapi.com/titles/x"){
//
// })

