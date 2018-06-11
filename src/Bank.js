export const deposit = (account, amount) => {
	if ( amount === Infinity || amount === null || isNaN(amount) || amount <= 0 ) {
		throw new Error('Not a valid amount!');
	}
	account.balance += Number(amount);
}

export const withdraw = (account, amount) => {
	if( amount <= 0 || amount > account.balance || isNaN(amount) ) {
		throw new Error('Not a valid amount!');
	}
	account.balance -= Number(amount);
}
