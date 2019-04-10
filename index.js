const findMatching = function(driverArray, string) {
  return driverArray.filter(d => {return d.toLowerCase() === string.toLowerCase()})
}

const fuzzyMatch = function(driverArray, string) {
  return driverArray.filter(d => {return d.slice(0,string.length).toLowerCase() === string.toLowerCase()})
}

const matchName = function(driverArray, string) {
  return driverArray.filter(d => {return d.name.toLowerCase() === string.toLowerCase()})
}
