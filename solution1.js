const listOfMovies = [
 {
  "name": 'Veer-Zaara',
  "license": [2008, 2012] //2008 2009 2010 2011 2012
 },
 {
  "name": 'Main Hoon Na',
  "license": [2008, 2011] //2008 2009 2010 2011
 },
 {
  "name": 'Dhoom',
  "license": [2008, 2012] //2008 2009 2010 2011 2012
 },
 {
  "name": 'Mujhse Shaadi Karogi',
  "license": [2009, 2013] //2009 2010 2011 2012
 },

];

// const listOfMovies1 = [
//     {
//         name: 'Lion King',
//         license: [2008, 2010] //2008,2009.2010
//     },
//     {
//         name: 'Lion King2',
//         license: [2006, 2008]  //2006, 2007,2008
//     },
//     {
//         name: 'Lion King3',
//         license: [2011, 2014] //2011,2012,2013,2014
//     },
//     {
//         name: 'Lion King4',
//         license: [2002, 2013] //2002,2003,2004,2005,2006,2007,2008,2009,2010.2011,2012,2013
//     },
//     {
//         name: 'Lion King5',
//         license: [2010, 2012] //2010,2011,2012
//     },
// ];

function findMaxMoviesInYear(movieData) {
 let year = {};
 for (let movie of movieData) {
  console.log(movie);
  const startyear = movie.license[0]
  let newrange = [];
  for (let i = startyear; i <= movie.license[1]; i++) {
   newrange.push(i);

  }
  console.log(newrange);
  newrange.map((x) => {
   year[x] = year[x] + 1 || 1;
  });



  // movieRange(movie.license[0],movie.license[1]);
 }
 console.log(Object.values(year));

 let maxCount = Math.max(...(Object.values(year)));
 console.log(maxCount);


 let maxYear = Object.keys(year).filter((key) => {
  if (year[key] === maxCount)
   return key
 })

 return maxYear
}
console.log(findMaxMoviesInYear(listOfMovies))