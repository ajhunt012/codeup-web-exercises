
(function () {
    "use strict";


    let accessToken = MAPBOX_TOKEN;
    mapboxgl.accessToken = MAPBOX_TOKEN;


    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [-100.0, 34.0],
        zoom: 4

    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-left');



    $('#btn').click(
        function findCoordinates() {
            geocode($('#search').val(), MAPBOX_TOKEN, map).then(
                function getLatLong(coordinates) {
                    //Resets the map
                    map.setCenter(coordinates)
                    map.setZoom(6)



                    //new marker at location
                    let marker = new mapboxgl.Marker({color: 'crimson'})

                    marker.setDraggable(coordinates)
                        .setLngLat([coordinates[0], coordinates[1]])
                        .addTo(map)


                    marker.on('dragend', function onDragEnd() {
                        const lngLat = marker.getLngLat();
                        let coordinates = lngLat.toArray()
                        console.log(lngLat.toArray())
                        getWeatherData(coordinates)
                    });

                    //Relay coordinates to weatherData
                    getWeatherData(coordinates)
                });
        });


    function getWeatherData(coordinates) {
        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: OPEN_WEATHER_APPID,
            lat: coordinates[1],
            lon: coordinates[0],
            units: "imperial",
            exclude: 'minutely,hourly,current,alerts'
        }).done(function (data) {

            //appending the weather
            let forecasts = data.list
            console.log("Data List: ", data.list)
            let appendedForecast = append(forecasts);
            $('#weather').html(appendedForecast);

            //Rendering City Name
            let city = data.city.name
            let country = data.city.country
            $('#city-name').html(`${city}, ${country}`);


        })
            .fail(function (jqXhr, status, error) {
            console.log(jqXhr);
            console.log(status);
            console.log(error);
        });
    }


    let append = function (data) {
        let html = ``
        for (let i = 0; i < data.length; i += 8) {
            // console.log("Data: ", data[i])
            const {
                dt_txt,
                main: {humidity, temp, temp_max, temp_min},
                weather: [{description, icon}],
                wind: {speed}
            } = data[i]
            html += `
            <div class="card  col-xxl">
               <h6 class="card-header date text-center ">${dt_txt.substring(5, 7)}/${dt_txt.substring(8, 10)}/${dt_txt.substring(0, 4)}</h6>
               <img src='http://openweathermap.org/img/w/${icon}.png' class="img-thumbnail mx-auto d-block border-0 img" alt="image">
               
              <div class="card-body pt-0">
              <h4 class="card-title text-center">${temp.toFixed(1)}??F</h4>
                <div class="d-flex justify-content-around" >
                <p class="card-text mb-0 text-warning pe-1"> H: ${temp_max.toFixed(1)}??F </p>
                <p class="card-text mb-0 text-warning" > L: ${temp_min.toFixed(1)}??F</p>
                </div>
              </div>
              <ul class="list-group list-group-flush text-center">
                <li class="list-group-item humidity">Humidity: ${humidity}%</li>
                <li class="list-group-item wind">Wind: ${speed} mph</li>
              </ul>
              <div class="card-body p-0 ">
              <p class="list-group-item bg-secondary text-light text-center p-0 m-0">${description.toUpperCase()}</p>
              </div>
            </div>`
        }
        return html
    }


})();