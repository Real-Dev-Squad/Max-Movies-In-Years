var arr = 
[
  {
    name: "Lion King",
    license: [2011, 2013]
  },

  {
    name: "Iron Man",
    license: [2005,2010]
  },
  {
    name: "Life of Pi",
    license: [2008,2014]
  },
  {
    name: "Another Movie",
    license: [2011,2013]
  }
];


var frequency = {};

function main(arr)
{
	countYearFrequency(arr)
	maxYears = getMaxYear(frequency)
	return maxYears
}

function countYearFrequency(arr) 
{
	arr.forEach(updateYearFrequency);     
}

function updateYearFrequency(item)
{
	startOfRange = item.license[0]
	endOfRange = item.license[1]
	
	var i;
	for(i = startOfRange; i<=endOfRange; i++ )
	{
		if (i in frequency)
			frequency[i]++

		else
			frequency[i] = 1
	}
}

function getMaxYear(frequency)
{
	year = []
	max = 0
	for (var key in frequency)
	{

  		if (frequency[key] == max)
  		{
  			year.push(key)
  		}
  		else if (frequency[key] > max)
  		{
  			max = frequency[key]
  			year = [key]
  		}
	}
	return year
}

var result  = main(arr)
console.log(result);
