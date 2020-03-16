/**
 * @param {{ name: string, license: [number, number]}[]} data
 * @returns {{year: number, count: number}[]}
 */

const maxMovieInYears = data => {
  const countOfEveryYear = {};
  let maxCount = 0;
  let yearsWithMaxCount = [];

  const yearsRange = data.map(movieData => movieData.license);

  yearsRange.forEach(yearRange => {
    let [startYear, endYear] = yearRange;

    let year = startYear;
    while (year <= endYear) {
      if (!(year in countOfEveryYear)) {
        countOfEveryYear[year] = 1;
      } else {
        countOfEveryYear[year]++;
      }

      year++;
    }
  });

  for (let year in countOfEveryYear) {
    let count = countOfEveryYear[year];

    if (count > maxCount) {
      maxCount = count;

      // Clear all previous years
      yearsWithMaxCount = [];

      yearsWithMaxCount.push({ year, count });
    } else if (count === maxCount) {
      yearsWithMaxCount.push({ year, count });
    }
  }

  return yearsWithMaxCount;
};

console.log(
  maxMovieInYears([
    {
      name: "lion king",
      license: [2008, 2010]
    },
    {
      name: "lion king",
      license: [2012, 2014]
    },
    {
      name: "pirates of the carrabian",
      license: [2010, 2010]
    },
    {
      name: "Raja Hindustani",
      license: [2008, 2018]
    },
    {
      name: "Tumbbad",
      license: [2014, 2015]
    },
    {
      name: "Tumbbad",
      license: [2016, 2018]
    }
  ])
);
