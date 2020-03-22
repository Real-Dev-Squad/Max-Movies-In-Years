const response = require('../src/utils/mock-data');
const maxYear = require('../src/max-years')
const validateSet = require('../src/utils/validation')


const response1 = maxYear(response.response1)
console.log(validateSet(response1, response.output.response1))

const response2 = maxYear(response.response2)
console.log(validateSet(response2, response.output.response2))

const response3 = maxYear(response.response3);
console.log(validateSet(response3, response.output.response3))

const response4 = maxYear(response.response4);
console.log(validateSet(response4, response.output.response4))

const empty_response = maxYear(response.empty_response)
console.log(validateSet(empty_response, response.output.empty_response))