const response = require('../src/utils/mock-data');
const maxYear = require('../src/max-years')

//TODO: add the check that can compare valid output to generated output

console.log(maxYear(response.response1))

console.log(maxYear(response.response2));

console.log(maxYear(response.response3));

console.log(maxYear(response.response4));

console.log(maxYear(response.empty_response))