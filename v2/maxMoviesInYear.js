// make an object where starting year keeps increasing and a year after end year keeps decreasing
// return an array of objects in sorted order
// evaluate where each key points to evaluation of sum of previous value and current value
// find the keys with max values
// check the key with max value, and next year to it in that array of object and return from the (year to year less than next number)



const mockData = require( '../mockResult.js' );
const { isNumber } = require( './helpers/index.js' );

/**
 * Returns a object with year as a key where starting year keeps increasing and a year after end year keeps decreasing by 1
 * @param {array} movies -Movies array
 */

function getFrequencyOfYears ( movies ) {
    let frequencyObj = {};
    for ( let movie of movies ) {
        const movieLicenseArray = movie.license;
        const movieLicenseStartYear = movieLicenseArray[0];
        const movieLicenseEndYear = movieLicenseArray[movieLicenseArray.length - 1];
        
        // check if startYear is always less than End Year
        if ( movieLicenseStartYear > movieLicenseEndYear ) return {};
            
        const movieLicenseYearNextToEnd = movieLicenseEndYear + 1;
        frequencyObj[movieLicenseStartYear] = isNumber( frequencyObj[movieLicenseStartYear] + 1 )? (frequencyObj[movieLicenseStartYear] + 1 ): 1;
        frequencyObj[movieLicenseYearNextToEnd] = isNumber( frequencyObj[movieLicenseYearNextToEnd] - 1) ? frequencyObj[movieLicenseYearNextToEnd] - 1 : -1;
    }
    return frequencyObj;
}

/**
 * Returns an array of objects with years in sorted order
 * @param {object} frequencyObject - Movie year with frequency object
 */

function getSortedYearsWithFrequency ( frequencyObject ) {
    const sortedArray = [];

    for ( let year in frequencyObject ) {
        sortedArray.push( { year: Number( year ), frequency: frequencyObject[year] } );
    }

    return sortedArray.sort( function ( a, b ) {
        return a.year - b.year;
    } );
}

/**
 * Evaluates where each year points to sum of previous year's frequency and current year frequency
 * @param {array} yearsWithFrequency - Array of sorted Movie year with frequency object 
 */

function getSortedYearsWithSummedFrequencies ( yearsWithFrequency ) {

    yearsWithFrequency.forEach( ( currentValue, index ) => {
        if ( index > 0 ) {
            currentValue.frequency += yearsWithFrequency[index - 1].frequency
            
        }
    });

    return yearsWithFrequency
}


/**
 * Returns years with max frequencies subset
 * @param {array} yearsWithFrequency - Array of Movie year with frequency object 
 */

function getMovieYearsWithMaxFrequencySubset ( yearsWithFrequency ) {
    const maxFrequency = yearsWithFrequency.reduce( ( max, obj ) => max > obj.frequency ? max : obj.frequency, yearsWithFrequency[0].frequency );
    const movieYears = [];

    for ( let obj of yearsWithFrequency ) {
        if ( obj.frequency === maxFrequency ) {
            movieYears.push(obj.year)
        }
    }
    return movieYears;
}

/**
 * Returns all years with max frequencies
 * @param {array} yearsWithFrequency - Array of subset of movie year with highest frequencies 
 */

function getAllMovieYearsWithMaxFrequency ( movieYearsWithMaxFrequency, allMovies ) {
    const resultArray = [];
    for ( let movieYear of movieYearsWithMaxFrequency ) {
        let currentYear = movieYear;
        const yearIndex = allMovies.findIndex( mov => mov.year === movieYear );
        const nextYearInArray = allMovies[yearIndex + 1].year;
        while ( currentYear < nextYearInArray ) {
            resultArray.push( currentYear++ );
        }
    }
    return resultArray;
}


function driverFunction ( mockData ) {
    if ( mockData.length === 0 ) return [];
    const frequencyOfYears = getFrequencyOfYears( mockData );
    // console.log( frequencyOfYears, "frequencyOfYears" );
    if ( Object.keys( frequencyOfYears ).length === 0 ) return [];
    const sortedYearsWithFrequency = getSortedYearsWithFrequency( frequencyOfYears );
    // console.log(sortedYearsWithFrequency,"sortedYearsWithFrequency")
    const sortedYearsWithSummedFrequencies = getSortedYearsWithSummedFrequencies( sortedYearsWithFrequency );
    // console.log(sortedYearsWithSummedFrequencies,"sortedYearsWithSummedFrequencies")
    const movieYearsWithMaxFrequency = getMovieYearsWithMaxFrequencySubset( sortedYearsWithSummedFrequencies );
    // console.log(movieYearsWithMaxFrequency,"movieYearsWithMaxFrequency")
    const allMovieYearsWithMaxFrequency = getAllMovieYearsWithMaxFrequency( movieYearsWithMaxFrequency, sortedYearsWithSummedFrequencies );
    // console.log(allMovieYearsWithMaxFrequency,"allMovieYearsWithMaxFrequency")
    return allMovieYearsWithMaxFrequency;
}

module.exports = driverFunction


