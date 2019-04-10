// Code your solution here

function findMatching(drivers,string){
  return drivers.filter(function(driver){
    return driver.toLowerCase() == string.toLowerCase()
  })
} 


function fuzzyMatch(drivers,string){
    return drivers.filter(function(driver){
        return (driver[0] + driver[1]).includes(string)
      })
}

function matchName(drivers,string){
    return drivers.filter(function(driver){
        return driver.name == string
      })
}