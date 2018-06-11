export const deposit = (account, amount) => {
	return account.balance += amount;
}

export const withdraw = (account, amount) => {
	if( amount <= 0 ) {
    throw new Error('Amount must be a positive number!');
  }
	return account.balance -= amount;
}

export const transfer = (accountSender, accountReceiver, amount) => {
	if( typeof accountReceiver.balance !== 'number' || accountReceiver.balance ) {
    throw new Error('Must input number');
  }
  return accountSender.balance -= amount;
}
