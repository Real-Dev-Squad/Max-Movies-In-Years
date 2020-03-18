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

### Time Complexity

`O(L)` : Where L is the length of the array (number of array elements)

### Space Complexity

`O(1)` : Constant time


### Crtical Parts / Bottleneck:

