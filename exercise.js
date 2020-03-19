let movies = [{
        name: "Lion King",
        license: [2008, 2020]
    },
    {
        name: "harry potter",
        license: [2011, 2013]


    }
];

function show(movie) {

    for (let i = 0; i < movie.length; i++) {
        console.log(movie[i].name + ":" + "[" + movie[i].license[0] + "," + movie[i].license[1] + "]");
    }

    let years = [];

    for (let i = 0; i < movie.length; i++) {
        let t = movie[i].license[1] - movie[i].license[0];
        years.push(movie[i].license[0], movie[i].license[1]);
        for (let j = 1; j < t; j++) {
            years.push(movie[i].license[0] + j);
        }

    }

    let y = [];

    for (let i = 0; i < years.length; i++) {
        y[i] = 0;
        for (let j = 0; j < years.length; j++) {
            if (years[i] == years[j]) {
                y[i] = y[i] + 1;
            }

        }


    }
    let temp = 0;
    for (let i = 0; i < years.length; i++) {
        if (temp < y[i]) {
            temp = y[i];

        }
    }
    let y1 = [];
    console.log("years with most movies are:");

    for (let i = 0; i < years.length; i++) {
        if (temp == y[i]) {
            y1.push(years[i]);
        }

    }

    for (i = 0; i < y1.length; i++) {
        for (j = i + 1; j < y1.length; j++) {
            if (y1[i] === y1[j]) {
                y1.splice(j, 1);
            }
        }

    }
    console.log(y1);
}
show(movies);
