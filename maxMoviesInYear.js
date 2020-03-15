/**
 * @name maxMoviesInYear
 * @description Function to find years with maximum number of movies licensed
 * @param {Array} moviesList The list of movies
 * @returns {Number[]} Years with max movies on platform
 */
function maxMoviesInYears(moviesList) {
    if (moviesList.length === 0) return [];

    const years = [];
    moviesList.forEach(movie => {
        for (let y = movie.license[0]; y <= movie.license[1]; ++y) years.push(y);
    });

    if (moviesList.length === 1) return years;

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