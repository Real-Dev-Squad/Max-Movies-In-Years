function getDeltaYears(years) {
  const START_YEAR = 0;
  const END_YEAR = 1;
  let tempyear = 0;
  const yearHashMap = new Map();
  years.forEach((year, index) => {
    tempyear = year['license'];

    yearHashMap.has(tempyear[START_YEAR])
      ? yearHashMap.set(
          tempyear[START_YEAR],
          yearHashMap.get(tempyear[START_YEAR]) + 1
        )
      : yearHashMap.set(tempyear[START_YEAR], +1);

    yearHashMap.has(tempyear[END_YEAR])
      ? yearHashMap.set(
          tempyear[END_YEAR],
          yearHashMap.get(tempyear[END_YEAR]) - 1
        )
      : yearHashMap.set(tempyear[END_YEAR], -1);
  });
  return yearHashMap;
}

function getSortedYears(years) {
  const sortedYear = Array.from(years.keys()).sort();
  return sortedYear;
}

function getYearTimeLine(sortedYears, hashMap) {
  const arr = new Array();
  let currentMax = 0;
  let max = 0;
  sortedYears.forEach(year => {
    currentMax = currentMax + hashMap.get(year);
    if (currentMax > max) {
      max = currentMax;
    }
    arr.push([year, currentMax]);
  });

  return [arr, max];
}

function getMaxYearsTimeLine(arr, max) {
  const maxYearArray = new Array();

  for (let i = 0, j = 0; i < arr.length; i++) {
    if (arr[i][1] === max) {
      j = i;
      while (arr[i][1] === max) {
        i++;
      }
      maxYearArray.push([arr[j][0], arr[i][0]]);
      /* if (arr[i][1] !== undefined) {
        maxYearArray.push([arr[j][0], arr[i][0]]);
      } else {
        maxYearArray.push(arr[i][0]);
      } */
    }
  }
  return maxYearArray;
}

function getMaxYears(years) {
  const deltaYearsMap = getDeltaYears(years);
  const sortedDeltaYears = getSortedYears(deltaYearsMap);
  const [yearTimeLine, max] = getYearTimeLine(sortedDeltaYears, deltaYearsMap);
  const maxYears = getMaxYearsTimeLine(yearTimeLine, max);
  return [maxYears, max];
}

module.exports = getMaxYears;
