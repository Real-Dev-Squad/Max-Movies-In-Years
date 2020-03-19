const arr = 
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


function main(arr)
{
	let frequency = countYearFrequency(arr);
	let maxYears = getMaxYear(frequency);
	return maxYears;
}

function countYearFrequency(arr) 
{
  let frequency = {};
	arr.forEach((item)=>{
    
  let startOfRange = item.license[0];
  let endOfRange = item.license[1];

  for(let i = startOfRange; i<=endOfRange; i++ )
  {
    if (i in frequency)
      frequency[i]++;
    else
      frequency[i] = 1;
  }});
  return frequency;     
}


function getMaxYear(frequency)
{
	let result_years = []

  //find maximum movies in any year
	let max = Math.max.apply(null,Object.values(frequency))

  //find years having max number of movies
  Object.entries(frequency).forEach(([year,no_of_movies])=>{
     if (no_of_movies == max)
       result_years.push(year);
   });
  return result_years;
}

let result  = main(arr)
console.log(result);
