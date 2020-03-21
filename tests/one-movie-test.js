const getMaxYears = require('../src/max-years');
const movies = [
  {
    name: 'Lion King',
    license: [2008, 2010]
  },
  {
    name: 'Lion King',
    license: [2011, 2012]
  }
];

const result = getMaxYears(movies);
console.log(result);
