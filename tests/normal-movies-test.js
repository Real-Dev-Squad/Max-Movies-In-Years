const getMaxYears = require('../src/max-years');
const movies = [
  {
    name: 'Lion King',
    license: [2008, 2010]
  },
  {
    name: 'Cars3',
    license: [2007, 2010]
  },
  {
    name: 'Cars1',
    license: [2004, 2006]
  },
  {
    name: 'Cars2',
    license: [2006, 2007]
  }
];

const result = getMaxYears(movies);
console.log(result);
