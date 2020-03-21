const getMaxYears = require('../src/max-years');
const movies = [
  {
    name: 'Lion King',
    license: [2008, 2010]
  },
  {
    name: 'Pokemon',
    license: [2008, 2010]
  },
  {
    name: 'Cars',
    license: [2007, 2010]
  },
  {
    name: 'Cars',
    license: [2004, 2006]
  },
  {
    name: 'Mr Robot',
    license: [2006, 2007]
  },
  {
    name: 'Iron Man',
    license: [2008, 2012]
  },
  {
    name: 'Terminator',
    license: [2004, 2007]
  },
  {
    name: 'Bat Man',
    license: [2004, 2007]
  },
  {
    name: 'Super Man',
    license: [2005, 2007]
  }
];
const result = getMaxYears(movies);
console.log(result);
