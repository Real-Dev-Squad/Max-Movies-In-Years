/**
 * finding the maximum count of movies in any of year
 * @param {Map} movieYearMap
 * @returns {Number} maxMovieCount
 */
function findMaxCountOfMovie(movieYearMap) {
    let maxMovieCount = Number.NEGATIVE_INFINITY;
    for (let [year, movieCount] of movieYearMap) {
        if (movieCount > maxMovieCount) {
            maxMovieCount = movieCount;
        }
    }
    return maxMovieCount;
}


//#region
/**
 * forming a map of years and count of movies
 * @param {Array} allMovies
 * @returns {Map} movieYearMap
 */
function formMovieYearMap(allMovies) {

    // creating a map object for storing the year as a key and number of movies in that year as a value.
    let movieYearMap = new Map();

    // iterating over the movies collection to store the key(year) value(count of movie) in the map object. 
    allMovies.forEach(movie => {

        if (movie.license.length > 0) {
            
            let license = [...movie.license];

            // the reason i am taking the difference is to find the intermediate years between the start and end year
            let yearDiff = license[1] - license[0];

            // if the start and end year is same we need only one year
            if (yearDiff == 0) {
                license.pop();
            }

            // only when the difference is more than 1 we need to find the intermediate years
            if (yearDiff > 1) {
                while (yearDiff > 1) {
                    license.push(license[license.length - 1] - 1); // we dont need to sort the list cause anyway we just need the years.
                    yearDiff = yearDiff - 1;
                }
            }

            // iterating over the license collection having years for each movie object
            license.forEach(year => {
                if (movieYearMap.has(year)) {
                    let noOfMovies = movieYearMap.get(year);
                    movieYearMap.set(year, noOfMovies + 1);
                }
                else {
                    movieYearMap.set(year, 1);
                }
            });
        }
    });

    return movieYearMap;

}
//#endregion




//#region 

/**
 * finding all the years were movies count is the maximum count
 * @param {Map} movieYearMap
 * @param {Number} maxMovieCount
 * @returns {Array} maxYearList
 */
function formMaxYearList(movieYearMap, maxMovieCount) {

    let maxYearList = [];
    for (let [year, movieCount] of movieYearMap) {
        if (movieCount === maxMovieCount) {
            maxYearList.push(year);
        }
    }
    return maxYearList;

}
//#endregion


/**
 * @description maxMoviesInYears function will process the movies list data and return a collection of year 
 * having maximum number of movies. we will export this function to the public modules.
 * @returns {publicAPI} this object will have the properties required to return.
 */
function maxMoviesInYears(movieslist) {

    // initializing the return object with empty yearListOfMaxMovies collection.
    let publicAPI = {
        yearListOfMaxMovies: []
    };

    // get the map of year and count of movies in that year
    let movieYearMap = formMovieYearMap(movieslist);

    // fing the max count of movie
    let maxMovieCount = findMaxCountOfMovie(movieYearMap);

    // get the collection of years having maximum number movies
    let maxYearList = formMaxYearList(movieYearMap, maxMovieCount);

    // assigning the years collection to publicAPI
    publicAPI.yearListOfMaxMovies = maxYearList;

    return publicAPI;
}

module.exports = maxMoviesInYears;
