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
  let frequency = getPreProcessedStructure(arr);
  let maxYears = getMaxYearRange(frequency);
  return maxYears;
}


function getPreProcessedStructure(arr) 
{
  let frequency = {};

  //+1 for every entry year -1 for every exit year
  // O(N)
  arr.forEach((item)=>{
    
  let startOfRange = item.license[0];
  let endOfRange = item.license[1];

  if (startOfRange in frequency)
      frequency[startOfRange]++;
    else
      frequency[startOfRange] = 1;
  
  if (endOfRange in frequency)
      frequency[endOfRange]--;
    else
      frequency[endOfRange] = -1;
  }); 
  return frequency;
}


function getMaxYearRange(frequency)
{
  let result_years = []
  let cumulative_sum = 0
  let max = 0, maxStart = -1
  //O(NlogN)
  let years = Object.keys(frequency).sort();

  //O(N)
  for (let i=0; i<years.length; i++)
  {
    cumulative_sum += frequency[years[i]];
    frequency[years[i]] = cumulative_sum;

    if (cumulative_sum > max)
    {
      max = cumulative_sum; 
      maxStart =  i;
    }
  }
  return [ years[maxStart],years[maxStart+1] ];
}

let result  = main(arr)
console.log(result);  
