const mockData= require('./mockResult.js')

function findMaxMoviesInYear ( data ) {
    const moviesInAYear = {};
    for ( let movie of data ) {
        const movieLicenseArray = movie.license.slice();
        const movieLicenseStartYear = movieLicenseArray[0];
        const movieLicenseEndYear = movieLicenseArray[movieLicenseArray.length - 1];

        let currentYear = movieLicenseStartYear;

        while ( currentYear <= movieLicenseEndYear ) {
            if ( moviesInAYear[currentYear] ) {
                moviesInAYear[currentYear] += 1;
            } else {
                moviesInAYear[currentYear] = 1;
            }
            currentYear+=1
        }
    }
    return getKeysWithMaxValuesInObject(moviesInAYear)
  
}


function getKeysWithMaxValuesInObject ( obj ) {
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
    return resultingArray

}

console.log(findMaxMoviesInYear(mockData))
