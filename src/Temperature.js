export const toFahrenheit = (degrees) => {
  if( degrees <= -273.16 || degrees === Infinity || degrees === null ) {
    return NaN;
  }
  return degrees * (9/5) + 32;
}
