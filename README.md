# Max-Movies-In-Years

# Task

Hotstar, Prime video, Netflix, etc acquires licenses on movie basis, to show the movies on their platform

Imagine that we can fetch from an API the details of all movies that were ever shown on a platform. Let’s assume that the licenses are granted year over year. The API returns an array of all the movies, in the following format:

```js
[
    {
        name: ‘Lion King’,
        license: [2008, 2010]
    },
    {
        ...
    },
    ...
]
```

**License**: `[<start year of the license>: Number, <end year of the license>: Number]`

Write a JS Module that returns in what year we had the maximum number of movies on that platfrom

# Solution Complexity

## Time Complexity

`O(nk)` - Where `n` is the number of elements in the array and `k` is the difference between the start year and the end year

### Critical Part / Bottleneck

```JavaScript
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
```

## Space Complexity

`O(m)` - Where `m` is the difference between the smallest year and the largest year.

### Critical Part

```JavaScript
  const countOfEveryYear = {};
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
```
