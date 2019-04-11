// Summan av två tal.
export const sum = (x, y) => {
  return x + y;
}

export const multiply = (x, y) => {
    return x * y;
}

export const divide = (x, y) => {
    if (isNaN(x) || isNaN(y)) {
        throw new Error('Not a valid number')
    }
    return x / y;
}
