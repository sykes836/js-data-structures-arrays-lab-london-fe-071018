// Write your solution here!



 const drivers = ["Milo", "Otis", "Garfield"]

 
 function destructivelyAppendDriver(driver) {
  drivers.push(driver);
  return drivers;
}
 function destructivelyPrependDriver(driver) {
  drivers.unshift(driver);
  return drivers;
}
 function destructivelyRemoveLastDriver(driver) {
  drivers.pop();
  return drivers;
}
 function destructivelyRemoveFirstDriver(driver) {
  drivers.shift();
  return drivers;
}
 function appendDriver(driver) {
  return [...drivers, driver];
}
 function prependDriver(driver) {
  return [driver, ...drivers];
}
 function removeLastDriver() {
  return drivers.slice(0, -1);
}
 function removeFirstDriver(){
  return drivers.slice(1)
}
