//TEST CASES
const movies=[
				{
					name:'Lion king',
					license: [2008,2010]
				},
				{
					name:'Harry potter',
					license: [2003,2019]
				},
				{
					name:'Ice Age',
					license: [2004,2015]
				},
				{
					name:'Up',
					license: [2007,2011]
				},
				{
					name:'Cars',
					license: [2006,2009]
				}
			];

function yearWithMaxNumOfMovies(movieList){
	
	var maxYearList=[];

	//Adding new key-value pair with all years of license
	for(var i=0;i<movieList.length;i++){
		movieList[i].year_range=range(movieList[i].license[0],movieList[i].license[1]);
	}

	//Getting a list of all years of different movies
	var allYears=combinedYearsArray(movieList);

	//finding max occuring year(s)
	var uniqueYear=[];
	var uniqueYearOccurence=[];
	var counter=1;
	var maxCounter=0;
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

	//Getting maxYearList
	for(var i=0;i<uniqueYearOccurence.length;i++){
		if(uniqueYearOccurence[i]===maxCounter){
			maxYearList.push(uniqueYear[i]);
		}
	}

	return maxYearList;	
}

//To create an array of elements sepcified within the given range
function range(start,end){
	var year_range=[];
	for(var i=start;i<=end;i++){
		year_range.push(i);
	}
	return year_range;
}

//Create a list with all the years of different movie license
function combinedYearsArray(movieList){
	var allYears=[];
	for(var i=0;i<movieList.length;i++){
		for(var j=0;j<movieList[i].year_range.length;j++){
			allYears.push(movieList[i].year_range[j]);
		}
	}
	//sorting allYears array
	return allYears.sort(function(a,b){return a-b});
}

console.log(yearWithMaxNumOfMovies(movies)); 