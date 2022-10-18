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
     * results. Why might this be useful?*/


     let planetV = planetsArray.join('<br>');
     console.log(planetV);

     /* BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    let str;
    let newPlanetsArray = [];

planetsArray.forEach(function (planet){
    //using template literals or (`), these help concat a string in a string.
    console.log(`<li>${planet}</li>`);
    newPlanetsArray.push(`<li>${planet}</li>`)
    //using concatenation:
    // newPlanetsArray.push("<li> + planet + </li>)
    });

console.log(newPlanetsArray);
newPlanetsArray.unshift('<ul>')
newPlanetsArray.push('</ul>');
    console.log(newPlanetsArray);
    str = newPlanetsArray.join();
    console.log(str);


})();