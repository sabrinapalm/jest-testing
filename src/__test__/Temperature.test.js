import { toFahrenheit } from '../Temperature';

describe('Celsius to Farenheit TEST', () => {

  //Test giltiga temperaturer
  //Giltig temperatur ex. 25, 0, 123456789
  it('should pass - number is valid', () => {
    expect(Number.isNaN(toFahrenheit(25))).toBeFalsy();
  });

  //Giltig temperatur som sträng '32'
  it('should pass - string to number is valid', () => {
    expect(Number.isNaN(toFahrenheit('32'))).toBeFalsy();
  });


  //Test ogiltiga temperaturer
  //Under -273.16
  it('should fail - (-273.16) = NaN', () => {
    expect(toFahrenheit(-273.16)).toBeNaN();
  });

  //Sträng
  it('should fail - `Kalle` = NaN', () => {
    expect(toFahrenheit('Kalle')).toBeNaN();
  });

  //Infinity
  it('should fail - Infinity = NaN', () => {
    expect(toFahrenheit(Infinity)).toBeNaN();
  });

  //Null
  it('should fail - Null = NaN', () => {
    expect(toFahrenheit(null)).toBeNaN();
  });

  //Undefined
  it('should fail - Undefined = NaN', () => {
    expect(toFahrenheit(undefined)).toBeNaN();
  })

});
