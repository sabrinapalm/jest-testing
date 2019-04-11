import { sum, multiply, divide } from '../Math';

describe('Simple math', () => {
    
    //Passed test
    it('sums numbers', () => {
        expect(sum(1, 2)).toEqual(3);
        expect(sum(2, 2)).toEqual(4);
    });
    
    it('multiply numbers', () => {
        expect(sum(1, 2)).toEqual(3);
        expect(sum(2, 2)).toEqual(4);
    });
    
    it('divides numbers', () => {
        expect(divide(20, 2)).toEqual(10);
        expect(divide(15, 2)).toEqual(7.5);
    });
    
    //Failing test
    it('failing devide numbers', () => {
        expect(divide('simba', 2)).toEqual(20);
    });
    
});
