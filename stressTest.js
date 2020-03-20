const yearWithMaxMovies=require("./yearsWithMaxMovies");

function slow_sure(Movies)
{
    if(Movies.length==0)
    {
        return [];
    }
    const ans= new Map();
    for(let i of Movies)
    {
        for(let j =i.licence[0];j<=i.licence[1];j++)
        {
            if(ans.has(j))
            {
                ans.set(j,ans.get(j)+1);
            }
            else
            {
                ans.set(j,1);
            }
        }
    }
    let max_count=0
    const output=[]
    for(let i of ans.values())
    {
        max_count=Math.max(max_count,i);
    }
    for(let i of ans.keys())
    {
        if(ans.get(i)==max_count)
        {
            output.push(i);
        }
    }
    return output;

}

while(true)
{
    const n=Math.floor(Math.random() * (+1000 - +0)) + +0;
    const Movies=[];
    for(let i=0;i<n;i++)
    {
        const start=Math.floor(Math.random() * (+2000 - +1000)) + +1000;
        const end=Math.floor(Math.random() * (+3000 - +2000)) + +2000;
        Movies.push({
            name : "Test Name",
            licence : [start,end]
        });

    }
    const ans1=new Set(yearWithMaxMovies(Movies));
    const ans2=new Set(slow_sure(Movies));
    if(ans1.size!=ans2.size)
    {
        console.log(Movies);
    }
    let difference = new Set(
        [...ans1].filter(x => !ans2.has(x)));
    if(difference.size!=0)
    {
        console.log(Movies);
        break;
    }
    console.log(ans1)
}