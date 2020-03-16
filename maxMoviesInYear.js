const mockData= require('./mockResult.js')

function findMaxMoviesInYear () {
    let moviesInAYear = {};
    for ( let movie of mockData ) {
        movie.license.reduce( ( acc, currentValue,currentIndex ) => {  
            let currentYear = currentValue;

            // loop through the license array till the end of the array and not consider the second index of the license array since it would be duplicate entry.

            while ( currentYear <= movie.license[movie.license.length - 1] && (currentIndex!==movie.license.length-1) ) {  
                if ( moviesInAYear[currentYear] ) {
                    moviesInAYear[currentYear] += 1;
                } else {
                    moviesInAYear[currentYear] = 1;
                }
                currentYear += 1;
            }
            return moviesInAYear
        },moviesInAYear)
    }
    return findMaxKeyInAObject(moviesInAYear)
  
}

function findMaxKeyInAObject ( obj ) {
    return Object.keys(obj).reduce(function(a, b){ return obj[a] > obj[b] ? a : b });

}

console.log(findMaxMoviesInYear())
