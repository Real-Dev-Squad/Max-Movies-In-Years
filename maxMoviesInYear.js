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
    let resultingArray = [];
    let MAX_VALUE = 1;
    for ( let key in obj ) {
        if ( !resultingArray ) {
            resultingArray.push(key)
        }
        if ( obj[key] === MAX_VALUE ) {
            resultingArray.push(key)
        }
       
        if ( obj[key] > MAX_VALUE ) {
            MAX_VALUE = obj[key];
            resultingArray = [];
            resultingArray.push(key)
        }
      
       
    }
    return resultingArray.length===1? resultingArray[0]:resultingArray

}

console.log(findMaxMoviesInYear())
