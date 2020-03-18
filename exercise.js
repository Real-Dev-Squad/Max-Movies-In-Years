let movies = [{
        name: "Lion King",
        license: [2011, 2013]
    },
    {
        name: "harry potter",
        license: [2011, 2013]
    },
    {
        name: "Iron man",
        license: [2011, 2013]
    },
    {
        name: "captain America",
        license: [2012, 2013]
    },

    {
        name: "Black panther",
        license: [2017, 2019]
    },

    {
        name: "Cival War",
        license: [2012, 2014]
    }
];

console.log(movies[0].name);

function show(movie) {

    let temp = 0;
    for (let i = 0; i < movie.length; i++) {
        console.log(movie[i].name + ":" + movie[i].license[0] + "-" + movie[i].license[1]);
    }


    let years = [];
    for (let i = 0; i < movie.length; i++) {
        years.push(movie[i].license[0], (movie[i].license[0] + 1), movie[i].license[1]);
    }
    console.log(years);
    let y = [];

    for (let i = 0; i < years.length; i++) {
        y[i] = 0;
        for (let j = 0; j < years.length; j++) {
            if (years[i] == years[j]) {
                y[i] = y[i] + 1;
            }
        }
        console.log(years[i] + " has movies " + y[i]);
    }

    for (let i = 0; i < years.length; i++) {
        if (y[0] < y[i]) {
            y[0] = y[i];
            temp = years[i];
        }


    }

    console.log(temp + " has the maximum movies" + ":" + y[0]);

}
show(movies);