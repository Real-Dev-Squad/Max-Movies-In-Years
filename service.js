/**
 * @description fetchMovies function will fetch from API the details of all movies that were ever shown on a platform.
 * For now it is just returning a demo object with lsit of movies data
 * The reason i am not returning a List but an object is that later if we want to add some additional properties too
 * then we can simply add in the return object.
 * @returns {Movies} data fetched from the API
 */
function fetchMovies() {
    const Movies = {
        Movieslist: [
            {
                name: 'Lion King',
                license: [2008, 2010]
            },
            {
                name: 'Avengers: End game',
                license: [2008, 2010]
            },
            {
                name: 'Batman',
                license: [2009, 2009]
            },
        ]
    }
    return Movies;
}

module.exports = fetchMovies;