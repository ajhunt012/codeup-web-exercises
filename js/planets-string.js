(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    let planetsArray = planetsString.split("|");
    console.log(planetsArray);


    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    // let planetString = <ul>("<li>Venus</li> <br></br> <li>Earth</li> <br></br> <li>Mars</li> <br></br> <li>Jupiter</li> <br></br> <li>Saturn</li> <br></br> <li>Uranus</li> <br></br> <li>Neptune</li> ")</ul>;


    let planetV = planetsArray.join('<br>');
    console.log(planetV);

    // function lists(){
     //}


})();