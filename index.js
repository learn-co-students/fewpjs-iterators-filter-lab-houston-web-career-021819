// Code your solution here
findMatching = function(drivers, string) {
  return drivers.filter(driver => {
    return driver.toUpperCase() === string.toUpperCase();
  });
};

fuzzyMatch = function(drivers, string) {
  return drivers.filter(driver => {
    return driver.slice(0, 2) === string;
  });
};

matchName = function(drivers, string) {
  return drivers.filter(driver => {
    return driver.name === string;
  });
};
