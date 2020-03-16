const movies = [
  {
    name: "Lion King",
    license: [2008, 2009]
  },
  {
    name: "King",
    license: [2010, 2011]
  },
  {
    name: "Lion",
    license: [2012, 2013]
  }
];
function findYearWithMostHits(movieList) {
  const hits = {};
  var maxHits = 0;
  movieList.map(movie => {
    movie.license.forEach(year => {
      if (!hits.hasOwnProperty(year)) {
        hits[year] = 1;
      } else {
        hits[year] = hits[year] + 1;
      }
    });
  });
  for (var year in hits) {
    if (hits[year] > maxHits) {
      maxHits = hits[year];
    }
  }
  return String(Object.keys(hits).filter(hit => hits[hit] === maxHits));
}
console.log(findYearWithMostHits(movies));
