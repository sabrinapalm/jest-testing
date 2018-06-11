import { deposit, withdraw } from '../Bank';

const kalle = {
  name: 'Kalle',
  balance: 150
};

const greta = {
  name: 'Greta',
  balance: 1200
};

const simba = {
  name: 'Simba',
  balance: 100
};

const jonny = {
  name: 'Jonny',
  balance: 500
};

describe('deposit', () => {
  //Giltiga deposits
	it('should pass - positive number as amount valid', () => {
    deposit(kalle, 110);
    expect(kalle.balance).toBe(260);
  });

  it('should pass - positive stringnumber as amount valid', () => {
    deposit(greta, '137');
    expect(greta.balance).toBe(1337);
  });

  //Ogiltiga deposits
  it('should fail - negative number as amount not valid', () => {
    expect(() => deposit(kalle, -150)).toThrow()
  });

  it('should fail - string as amount not valid', () => {
    expect(() => deposit(kalle, 'greta')).toThrow()
  });

  it('should fail - Infinity as amount not valid', () => {
    expect(() => deposit(kalle, Infinity)).toThrow()
  });

  it('should fail - null as amount not valid', () => {
    expect(() => deposit(kalle, null)).toThrow()
  });

  it('should fail - undefined as amount not valid', () => {
    expect(() => deposit(kalle, undefined)).toThrow()
  });

  it('should fail - NaN as amount not valid', () => {
    expect(() => deposit(kalle, NaN)).toThrow()
  });
});



describe('withdraw', () => {
  //Giltiga withdraws
	it('should pass - positive number as amount valid', () => {
    withdraw(simba, 100);
    expect(simba.balance).toBe(0);
  });

  it('should pass - positive stringnumber as amount valid', () => {
    withdraw(jonny, '200');
    expect(jonny.balance).toBe(300);
  });

  //Ogiltiga withdraws
  it('should fail - amount higher then balance', () => {
    expect(() => withdraw(simba, 200)).toThrow()
  })

  it('should fail - negative number as amount not valid', () => {
    expect(() => withdraw(jonny, -200)).toThrow()
  })

  it('should fail - string as amount not valid', () => {
    expect(() => withdraw(kalle, 'greta')).toThrow()
  });

  it('should fail - Infinity not valid', () => {
    expect(() => withdraw(jonny, Infinity)).toThrow()
  })

  it('should fail - null not valid', () => {
    expect(() => withdraw(jonny, null)).toThrow()
  })

  it('should fail - undefined not valid', () => {
    expect(() => withdraw(jonny, undefined)).toThrow()
  })

  it('should fail - NaN as amount not valid', () => {
    expect(() => deposit(kalle, NaN)).toThrow()
  });
});
