/**
 * @name getYearsFromList
 * @description Function to extract license years from list of movies
 * @param {Array} moviesList The list of movies
 * @returns {Number[]} The list of all years
 */
function getYearsFromList(moviesList) {
    const years = [];
    moviesList.forEach(movie => {
        for (let y = movie.license[0]; y <= movie.license[1]; ++y) years.push(y);
    });

    return years;
}

/**
 * @name getMaxMovieYearsFromYears
 * @description Function to find years with maximum number of movies licensed
 * @param {Number[]} years The list of all years
 * @returns {Number[]} Years with max movies on platform
 */
function getMaxMovieYearsFromYears(years) {
    const maxMovieYears = new Set();
    let frequency = 1;

    years.forEach(year => {
        const currentFrequency = years.filter(y => y === year).length;
        if (currentFrequency >= frequency) {
            if (currentFrequency > frequency) maxMovieYears.clear();
            maxMovieYears.add(year);
            frequency = currentFrequency;
        }
    });
    return [...maxMovieYears];
}

/**
 * @name maxMoviesInYear
 * @description Function to find years with maximum number of movies licensed
 * @param {Array} moviesList The list of movies
 * @returns {Number[]} Years with max movies on platform
 */
function maxMoviesInYears(moviesList) {
    const years = getYearsFromList(moviesList);
    const maxMovieYears = getMaxMovieYearsFromYears(years);
    return maxMovieYears;
}

const listOfMovies = [
    {
        "name": 'Lion King',
        "license": [2008, 2010]
    },
    {
        "name": 'Some Other Movie',
        "license": [2008, 2011]
    },
    {
        "name": 'Another Good Movie',
        "license": [2008, 2012]
    },
    {
        "name": 'Yet Another Good Movie',
        "license": [2009, 2013]
    }
];

console.log(maxMoviesInYears(listOfMovies));