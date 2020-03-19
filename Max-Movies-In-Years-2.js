function displayMap(map) {
    map.forEach((value, key) => console.log(key + ":" + value))
}

//TODO: if year array empty , space complexity improved , filling of map need to be seperated to new func call 
// TODO:  explain need for sort and why wrote that comprator 
// TODO: wrong space complexity evaluated 

//Response consist of obj ->year [start,end]
const arr = [{
        name: "kratika",
        year: [2008, 2010]
    },
    {
        name: "kratika2",
        year: [2005, 2012]
    },
    {
        name: "kratika3",
        year: [2013, 2014]
    },
    {
        name: "kratika4",
        year: [2007, 2011]
    }
]

function getMaximumYears2(arr) {

    // get the years and sort to get lowest and highest year 
    const years = arr.reduce((acc, element) => {
        return acc.concat(element.year)
    }, []).sort((a, b) => a - b)

    const minYear = years[0];
    const maxYear = years[years.length - 1];
    // map year to movie 
    let yearMap = new Map();
    for (let i = minYear; i <= maxYear; ++i) {
        yearMap.set(i, 0);
    }

    arr.forEach((element) => {
        for (let i = element.year[0]; i <= element.year[1]; ++i) {
            yearMap.set(i, (yearMap.get(i) + 1));
        }
    })


    let maximumYear = []; // array to store the answer
    let count = Number.NEGATIVE_INFINITY;
    yearMap.forEach((value, key) => {
        if (value > count) {
            count = value;
        }
    })

    yearMap.forEach((value, key) => {
        if (value == count) {
            maximumYear.push(key);
        }
    })

    return maximumYear;

}

exports {
    getMaximumYears2
}