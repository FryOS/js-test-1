
const addressLat = 2;
const addressLong = 8;
const positionLat = 3;
const positionLong = 7;

const dist = Math.sqrt(((positionLong - positionLat)**2) + (( addressLong - addressLat)**2)); 
console.log(`Расстояние до точки = ${Math.round(dist)}`);