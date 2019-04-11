import sum from '../Sum';

describe('Sums number', () => {

  it('sums numbers', () => {
    expect(sum(1, 2)).toEqual(3);
    expect(sum(2, 2)).toEqual(4);
  });

});
