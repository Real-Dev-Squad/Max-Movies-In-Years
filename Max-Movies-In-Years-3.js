function Movie(name, year) {
    this.name = name;
    this.year = year;
}

Movie.prototype.selfInfo = function () {
    return `Name:${this.name},Self years:${this.year[1]-this.year[0]}`
}

const response = [];

response.push(new Movie("Lion king", [2008, 2010]))
response.push(new Movie("Muffasa", [2009, 2011]))
response.push(new Movie("Frozen", [2002, 2007]))
response.push(new Movie("Death Race", [2009, 2009]))
response.push(new Movie("Blade Runner", [2005, 2007]))
response.push(new Movie("Titanic", [2006, 2007]))

function sortYears(a, b) {
    if (a.year[0] > b.year[0]) {
        return 1;
    }
    if (a.year[0] < b.year[0]) {
        return -1;
    }
    if (a.year[0] == b.year[0]) {
        if (a.year[1] > b.year[1]) {
            return 1;
        } else if (a.year[1] < b.year[1]) {
            return -1;
        } else {
            return 0;
        }
    }
}

function yearWithMaxMovies(response) {
    response.sort(sortYears);
    let prev = response[0].year; // keep track of maximum overlap that can be found
    let counter = 1;
    let max_count = 0;
    let ans = [];
    for (let i = 1; i < response.length; ++i) {
        // check if the element year is in given .
        if (prev[1] >= response[i].year[0] && prev[0] <= response[i].year[0]) {
            counter += 1;
            prev = [Math.max(response[i].year[0], prev[0]), Math.min(response[i].year[1], prev[1])];

        } else {
            // found a new interval
            if (counter > max_count) {
                max_count = counter;
                ans = []; // discard previous answer
                ans.push(prev);

            } else if (counter == max_count) {
                // append the answer
                ans.push(prev);
            }
            counter = 1;
            prev = response[i].year;

        }
    }
    if (counter > max_count) {
        ans = prev;
    } else if (counter == max_count) {
        ans.push(prev);
    }

    const maxYears = []

    for (let i of ans) {
        for (let j = i[0]; j <= i[1]; j++) {
            maxYears.push(j);
        }
    }
    return maxYears;
}

console.log(yearWithMaxMovies(response));