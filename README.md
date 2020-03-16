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

**TIME COMPLEXITY**: O(n^2)

```
for(var i=0;i<allYears.length;i=i+counter){
		counter=1;
		for(var j=i+1;j<allYears.length;j++){
			if(allYears[i]===allYears[j]){
				counter++;
			}
		}
		uniqueYear.push(allYears[i]);
		uniqueYearOccurence.push(counter);
		if(maxCounter<counter){
			maxCounter=counter;
		}
	}
 ``` 
    
**SPACE COMPLEXITY:** O(n*m)
where m is max range of year license

```
for(var i=0;i<movieList.length;i++){
		for(var j=0;j<movieList[i].year_range.length;j++){
			allYears.push(movieList[i].year_range[j]);
		}
	}
```

**TIME & SPACE COMPLEXITY CAN BE REDUCED BY MAPPING AND HASHING**
But I don't know how to do that. Couldn't do max overlap with mapping :D
