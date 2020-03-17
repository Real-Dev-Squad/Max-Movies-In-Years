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

Write a JS Module that returns in what year we had the maximum number of movies on that platfrom

# Solution Complexity

## Time Complexity

```js
function getYearsFromList(years)
```
`forEach` will have `O(N)` and inside `for` loop will have same `O(N)` making total of `O(N^2)`

``` js
function getMaxMovieYearsFromYears(years)
```
Similarly, `forEach` will have `O(N)` and `filter` has another `O(N)` making it `O(N^2)`

```js
function maxMoviesInYear(moviesList)
``` 
Calling both the functions above one time each, it will be having `O(N^2) + O(N^2) = O(N^2)`

### Critical Parts/Bottleneck

```js
moviesList.forEach(movie => {
        for (let y = movie.license[0]; y <= movie.license[1]; ++y) years.push(y);
```

```js
years.forEach(year => {
        const currentFrequency = years.filter(y => y === year).length;
```

## Space Complexity
```js
function getYearsFromList(years)
```
- The input `moviesList` is will take `N` units of space.
- `years` will take `2N` units of space
- Iterator `y` will take `1` unit of space

So, the total space complexity will be `N+2N+1 = O(N)`

``` js
function getMaxMovieYearsFromYears(years)
```
- Input `years` will take `N` units of space
- `maxMovieYears` will also take `N` units of space.
- `frequency` will take only `1` unit of space.
- `currentFrequency` will always store the `length` of the array returned by `filter()`. So it'll take `1` unit of space.

So, the total complexity will be `N+N+1+1 = O(N)`
```js
maxMoviesInYear(moviesList)
``` 
- `moviesList` will take `N` units and same for `years` and `maxMovieYears` as well.

So, the total complexity will be `N+N+N = O(N)`

