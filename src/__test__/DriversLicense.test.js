import { canGetLicense } from '../DriversLicense';

const A = 'A',
      B = 'B',
      BE = 'BE',
      C = 'C',
      D = 'D'


// Om båda parametrarna har tillåtna värden så ska funktionen returnera antingen true eller false.
// Annars ska funktionen kasta ett Error med throw.
// toBe - gör en jämförelse utan typkonvertering, dvs ===
// toThrow - kontrollera att testet kastar ett error

describe('Am I old enough for a drivers license?', () => {

  //Test id underaged
  it('should fail - To young for A', () => {
    expect(canGetLicense(A, 20)).toBe(false);
  });

  it('should fail - To young for B', () => {
    expect(canGetLicense(B, 16)).toBe(false);
  });

  it('should fail - To young for BE', () => {
    expect(canGetLicense(BE, 17)).toBe(false);
  });

  it('should fail - To young for C', () => {
    expect(canGetLicense(C, 18)).toBe(false);
  });

  it('should fail - To young for B', () => {
    expect(canGetLicense(D, 20)).toBe(false);
  });


  //Test if old enough
  it('should pass - old enough for A', () => {
    expect(canGetLicense(A, 30)).toBe(true);
  });

  it('should pass - old enough for B', () => {
    expect(canGetLicense(B, 18)).toBe(true);
  });

  it('should pass - old enough for BE', () => {
    expect(canGetLicense(BE, 20)).toBe(true);
  });

  it('should pass - old enough for C', () => {
    expect(canGetLicense(C, 25)).toBe(true);
  });

  it('should pass - old enough for D', () => {
    expect(canGetLicense(D, 25)).toBe(true);
  });


  //Test if too old
  it('should fail - driver probably dead', () => {
    expect(() => canGetLicense(B, 120)).toThrow();
  });

  //Test if not born yet
  it('should fail - driver probably not born yet', () => {
    expect(() => canGetLicense(B, 0)).toThrow();
  });


  //Throw if license is not valid
  it('should fail - undefined is not a valid license', () => {
    expect(() => canGetLicense(undefined, 22)).toThrow();
  });

  it('should fail - null is not a valid license', () => {
    expect(() => canGetLicense(null, 22)).toThrow();
  });

  it('should fail - NaN is not a valid license', () => {
    expect(() => canGetLicense(NaN, 22)).toThrow();
  });

  it('should fail - string is not a valid license', () => {
    expect(() => canGetLicense('kalle', 22)).toThrow();
  });


  //Throw if age is not valid
  it('should fail - undefined is not valid age', () => {
    expect(() => canGetLicense(A, undefined)).toThrow();
  });

  it('should fail - null is not valid age', () => {
    expect(() => canGetLicense(B, null)).toThrow();
  });

  it('should fail - NaN is not valid age', () => {
    expect(() => canGetLicense(BE, NaN)).toThrow();
  });

  it('should fail - string is not valid age', () => {
    expect(() => canGetLicense(C, 'kalle')).toThrow();
  });


});
