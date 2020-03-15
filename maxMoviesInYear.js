/**
 * @name maxMoviesInYear
 * @description Function to find year with maximum number of movies
 * @param {Array} moviesList The list of movies
 * @returns {Number} Year with max movies
 */
function maxMoviesInYear(moviesList) {
    if (moviesList.length === 0 || moviesList.length === 1) {
        return (moviesList.length === 0) ? 0 : moviesList[0].license[0];
    } else {
        const years = [];
        moviesList.forEach(movie => years.push(...movie.license));
        let [maxMoviesYear, frequency] = [years[1], 1];

        years.forEach(year => {
            const currentFrequency = years.filter(y => y === year).length;
            if (currentFrequency > frequency) [maxMoviesYear, frequency] = [year, currentFrequency];
        });
        return maxMoviesYear;
    }
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

console.log(maxMoviesInYear(listOfMovies));