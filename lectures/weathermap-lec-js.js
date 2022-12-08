
$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: OPEN_WEATHER_APPID,
    q:     "San Antonio, US",
    units: "imperial"
}).done(function(data) {
    console.log(data); // log all of JSON object
    for(let i = 0; i <= 39;  i+=8){
        console.log(data.list[i].main.temp_max);
    };
    // console.log(data.list[0].main.temp_max); //  pick out max temp - day 1
    // console.log(data.list[8].main.temp_max); // day 2
    // console.log(data.list[16].main.temp_max); // day 3
    // console.log(data.list[24].main.temp_max); // day 4
    // console.log(data.list[32].main.temp_max); // day 5
});