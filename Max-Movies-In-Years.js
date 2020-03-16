const res = [
  {
    name: "Lion King",
    license: [2008, 2010]
  },

  {
    name: "Iron Man",
    license: [2005, 2008, 2011, 2012]
  },
  {
    name: "Life of Pi",
    license: [2008, 2011, 2014]
  }
];
function getMaximumYears(res) {
  const licenseArray = res.reduce((acc, element) => {
    return acc.concat(element.license);
  }, []);
  let yearMap = new Map();
  for (let i = 0; i < licenseArray.length; ++i) {
    if (!yearMap.has(licenseArray[i])) {
      yearMap.set(licenseArray[i], Number(1));
    } else {
      yearMap.set(licenseArray[i], yearMap.get(licenseArray[i]) + 1);
    }
  }

  let maximumYear = 0;
  let maximumValue = 0;
  yearMap.forEach(function(value, key) {
    if (value > maximumValue) {
      maximumValue = value;
      maximumYear = key;
    }
  });
  return maximumYear;
}

export {getMaximumYears}
