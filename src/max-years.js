function sortedYear(res) {
    function sorty(a, b) {
        if (a.years[0] > b.years[0]) {
            return 1;
        }
        if (a.years[0] < b.years[0]) {
            return -1;
        }
        if (a.years[0] == b.years[0]) {
            if (a.years[1] > b.years[1]) {
                return 1;
            } else {
                return -1;
            }
            return 0;
        }
    }
    res.sort(sorty);
    return res;
}

function buildMap(sortedRes) {
    const map = {};
    for (let i = 0; i < sortedRes.length; ++i) {
        map[sortedRes[i].years[0]] = map.hasOwnProperty(sortedRes[i].years[0]) ? map[sortedRes[i].years[0]] + 1 : 1;
        map[sortedRes[i].years[1] + 1] = map.hasOwnProperty(sortedRes[i].years[1] + 1) ? map[sortedRes[i].years[1] + 1] - 1 : -1;
    }
    return map;
}

function buildCummulativeMap(mapYear) {
    const keys = Object.keys(mapYear);
    for (let i = 1; i < keys.length; ++i) {
        mapYear[keys[i]] = mapYear[keys[i]] + mapYear[keys[i - 1]]
    }
    return mapYear;
}

function findMaxInterval(mapYear) {
    let globalmaximum = Number.NEGATIVE_INFINITY;
    let globalMaxArr = []
    for (const year in mapYear) {
        if (mapYear[year] > globalmaximum) {
            globalMaxArr = []
            globalMaxArr.push(year)
            globalmaximum = mapYear[year];
        } else if (mapYear[year] == globalmaximum) {
            globalMaxArr.push(year)
        }
    }
    let keyArr = Object.keys(mapYear);
    let intervals = []
    for (let i = 0; i < globalMaxArr.length; ++i) {
        let index = keyArr.indexOf(globalMaxArr[i]);
        intervals.push([globalMaxArr[i], keyArr[index + 1]]);
    }
    let yearSet = new Set();
    for (let i = 0; i < intervals.length; ++i) {
        for (let j = intervals[i][0]; j < intervals[i][1]; ++j) {
            yearSet.add(j)
        }
    }
    return yearSet;

}

function maxYears(res) {
    if (!res.length) {
        return {};
    }
    const sortedYears = sortedYear(res);
    let mappedYear = buildMap(sortedYears);
    mappedYear = buildCummulativeMap(mappedYear)
    const yearSet = findMaxInterval(mappedYear);
    return yearSet;

}



module.exports = maxYears;