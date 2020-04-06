# Max-Movies-In-Years


Max-years => Steps followed 

Sorted the given response 
Built map based on  increment and decrement of movies
Built cummulative map and then find global maxima and local minima to get interval
Perpare set based on obtained interval

Time complexity = O(nlogn) where n will be the elements in array
Space complexity = O((Ymax-Ymin))


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
