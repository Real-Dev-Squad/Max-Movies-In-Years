/*
This is a dummy set of data to test our function for a variety of test cases
*/ 


 const Movies =[{
    name:"Lion King",
    licence: [2008,2010]
},
{
    name:"Titanic",
    licence: [2007,2011]
},
{
    name:"Prestige",
    licence: [2009,2016]
},
{
    name:"Desperado",
    licence: [2005,2009]
},
{
    name:"Flame",
    licence: [2011,2012]
},
{
    name:"Frozen",
    licence: [2010,2019]
}];

/*
The function to retrive the list of years with maximum number of Movies existing in it
*/ 

function yearWithMaxMovies(l){

    if(l.length==0)
    {
        return [];
    }
    /*
sort the movie objects in-place  with according to their starting year and if has a conflict then resolve it 
with the ending year
*/ 
    l.sort(function(a,b){
        if(a.licence[0]>b.licence[0]){
            return 1;
        }
        else if(a.licence[0]==b.licence[0]){
            return a.licence[1]>b.licence[1] ? 1: a.licence[1]==b.licence[1] ? 0: -1 ;
        }
        return -1;
    });
    /*
start a previous pinter that starts with the first value
*/ 
    let prev=l[0].licence;
    /*
counter keeps track of the occurences of the smallest common intersection among consequtive objects
*/ 
    let counter=1;
    /*
max_count keeps track of the maximum count of any common range found so far
*/ 
    let max_count=0;
    /*
ans keeps track of the common ranges that has max_count so far
*/ 
    let ans=[];
    
    for(let i=0;i<l.length;i++)
    {
        if(prev[1]>=l[i].licence[0] && prev[0]<=l[i].licence[0])
        {
           /*
increment the counter if found a common range
*/ 
            counter+=1;
            /*
if found ANY OVERLAPPING    RANGE we have to take the smallest intersecting segment visualized by 
a straight line 
*/ 
            prev=[Math.max(l[i].licence[0],prev[0]),Math.min(prev[1],l[i].licence[1])];
        }
        else
        {
            if(counter>max_count)
            {
               /*
if counter of the current range is greater than the max_count then re-assign the ans list
re-assign the max_count
*/ 
                max_count=counter;
                ans=[prev];
            }
            else if(counter==max_count)
            {
               /*
if counter is equal to the max count that means we have multiple range with the same number of occurunces
add it to the ans
*/ 
                ans.push(prev);
            }
            prev=l[i].licence;
            counter=1;
        }
    }
    /*
for last time updating the max counter and doing so the ans also
*/ 
    if(counter>max_count)
    {
        ans=[prev];
    }
    else if(counter==max_count)
    {
        ans.push(prev);
    }
    /*
y is our output list that has all the intermediate years inside our ans sub-ranges
example ans=[[2011,2015],[2020,2022]] y=[2011,2012,2013,2014,2015,2020,2021,2022]
*/ 
    let y=[];
    for(let i of ans)
    {
        for(let j=i[0];j<=i[1];j++)
        {
            y.push(j);
        }
    }
    return y;
}

module.exports = yearWithMaxMovies