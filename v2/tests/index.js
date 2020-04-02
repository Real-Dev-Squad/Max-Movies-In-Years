const responseData = require( "../utils/mockResult" );
const driverFunction = require( '../maxMoviesInYear' );
const { equalArray } = require( '../helpers/index.js' );

console.log("Test 1", equalArray(driverFunction(responseData.response1),[]));
console.log("Test 2", equalArray(driverFunction(responseData.response2),[2006,2007,2009]));
console.log("Test 3", equalArray(driverFunction(responseData.response3),[2001,2002,2003,2007,2008]));
console.log("Test 4", equalArray(driverFunction(responseData.response4),[]));
console.log("Test 5", equalArray(driverFunction(responseData.response5),[2001,2007]));


