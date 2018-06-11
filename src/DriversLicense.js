const A = 'A',
      B = 'B',
      BE = 'BE',
      C = 'C',
      D = 'D'

export const canGetLicense = (license, age) => {

  if( age >= 120 || age <= 0 ) {
    throw new Error('Do you even exist?')
  }

  if (license && age === undefined || license && age === null || license === NaN  ) {
    throw new Error('Those are not valid inputs')
  }

  if ( isNaN(age) ) {
    throw new Error('NaN is not a valid age')
  }

  switch(license){
    case A:
    case D:
      return ((age >= 24) ? true : false);
      break;
    case B:
    case BE:
      return ((age >= 18) ? true : false);
      break;
    case C:
      return ((age >= 21) ? true : false);
      break;
    default:
      throw new Error('Not a valid input');
      break;
  }
}
