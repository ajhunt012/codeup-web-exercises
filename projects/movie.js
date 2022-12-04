(function() {
    "use strict";

    setTimeout(() => {
        let load = "";
        load +=`<div class="d-flex align-items-center">
                <strong>Loading...</strong>
                <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                </div>`;
        $(".container").html(load);
    }, 1);

    function makeRequest() {
        setTimeout(() => {
            fetch('https://polished-bouncy-health.glitch.me/movies').then((data) => {
                return data.json();
            }).then((objectData) => {
                console.log(objectData);
                let movieContent = ""
                for(let i = 0; i < objectData.length; i++) {

                    let movieId = (objectData[i].id);                       //Movie ID
                    // console.log(`Movie ID: ${movieId}`);

                    let movieTitle = (objectData[i].title);                 //Movie Title
                    // console.log(`Movie Title: ${movieTitle}`);


                    let movieRating = (objectData[i].rating);               //Movie Rating
                    // console.log(`Movie Rating: ${movieRating}`);

                    let movieGenre = (objectData[i].genre);                 //Movie Genre
                    // console.log(`Movie Genre: ${movieGenre}`);

                    let moviePoster = (objectData[i].poster);               //Movie Poster
                    // console.log(`Movie Poster: ${moviePoster}`);

                    movieContent += `<div class="card">
                                        <div class="movieInfo">
                                            <img class="image" alt="Image" src="${moviePoster}" <br>
                                            <p class="title">Title: ${movieTitle}</p>
                                            <p class="genre">Genre: ${movieGenre}</p>
                                            <p class="rating">Rated: ${movieRating}</p>
                                            <button value="${movieId}" type="button" class="deleteButton">Delete Movie</button>
                                        </div>
                                     </div>`
                }
                $(".container").html(movieContent);
                deleteFunction();
                addFunction();
            }).catch(error => console.log(error));
        }, 1000)
    }
    makeRequest();

    //Delete button
    function deleteFunction () {
        $(".deleteButton").on("click", function(e) {
            console.log($(this).val());
            $(this).css("background-color", "black").css("color", "white");
            e.preventDefault();
            const url = 'https://polished-bouncy-health.glitch.me/movies/' + $(this).val();
            const options = {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json',
                }
            };
            fetch(url, options).then(() => fetch('https://polished-bouncy-health.glitch.me/movies')).then((data) => {
                return data.json();
            }).then((objectData) => {
                console.log(objectData);
            }).catch((error) => {
                console.log(error);
            });
        });
    }

    //Add movie
    function addFunction () {
        $("#saveButton").on("click", function(e) {
            e.preventDefault();
            const submitObj = {
                title: $("#addTitle").val(),
                rating: $("#addRating").val(),
                genre: $("#addGenre").val(),
            };
            const url = 'https://polished-bouncy-health.glitch.me/movies/';
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submitObj),
            };
            fetch(url, options).then(() => fetch('https://polished-bouncy-health.glitch.me/movies')).then((data) => {
                return data.json();
            }).then((objectData) => {
                console.log(objectData);
            }).catch((error) => {
                console.log(error);
            })
        })
    }

    //Reloads page
    function reloadFunction () {
        $("#homeRefresh").on("click", function(e) {
            e.preventDefault();
            window.location.reload();
        });
    }
    reloadFunction();

})();

