/**
 * @param {{ name: string, license: [number, number]}[]} apiResponse
 * @returns {{year: number, count: number}[]}
 */

const maxMovieInYears = apiResponse => {
  let countOfEveryYear = {}; // To store the count of every year

  let maxCount = 0; // To track the maximum Count

  let yearsWithMaxCount = []; // To store all the years with the maximum count

  let yearsRange = apiResponse.map(movieData => movieData.license);

  yearsRange.forEach(yearRange => {
    let startYear = yearRange[0];
    let endYear = yearRange[1];

    while (startYear <= endYear) {
      if (!(startYear in countOfEveryYear)) {
        countOfEveryYear[startYear] = 1;
      } else {
        countOfEveryYear[startYear]++;
      }

      startYear++;
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
