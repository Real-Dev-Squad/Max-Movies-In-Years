const maxMovie = require('./max-movies-in-years');
const movieData = require('./service');

const data = movieData();

let yearsList = [];
if(data !== undefined && data.Movieslist !== undefined && data.Movieslist.length > 0)
    yearsList = maxMovie(data.Movieslist).yearListOfMaxMovies;

console.log(yearsList);