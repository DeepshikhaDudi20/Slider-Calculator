import { termToYear, calculateLoan } from '../../utils/loanCalculator';
describe('The termToYear function', () => {
    it('should convert 12 months to 1 Year', () => {
        expect(termToYear(12)).toEqual('1 Year');
    });

    it('should convert 18 months to 1½ Years', () => {
        expect(termToYear(18)).toEqual('1½ Years');
    });

    it('should convert 24 months to 2 Years', () => {
        expect(termToYear(24)).toEqual('2 Years');
    });

    it('should convert 36 months to 3 Years', () => {
        expect(termToYear(36)).toEqual('3 Years');
    });

    it("should throw an error if termInMonths is less than 12", () => {
        expect(() => termToYear(6)).toThrow("Term should be in range of 1 year to 5 years");
    });

    it("should throw an error if termInMonths is greater than 60", () => {
        expect(() => termToYear(72)).toThrow("Term should be in range of 1 year to 5 years");
    });
});

describe('The calculateLoan function', () => {
    test('should return the correct loan values for an amount of 5000 and term of 24', () => {
        const result = calculateLoan(5000, 24);
        expect(result.amountValue).toBe(5000);
        expect(result.termValue).toBe(24);
        expect(result.interestRateValue).toBe(5);
        expect(result.monthlyRepaymentValue).toBe(219);
    });

    test('should return the correct loan values for an amount of 15000 and term of 48', () => {
        const result = calculateLoan(15000, 48);
        expect(result.amountValue).toBe(15000);
        expect(result.termValue).toBe(48);
        expect(result.interestRateValue).toBe(15);
        expect(result.monthlyRepaymentValue).toBe(417);
    });

    test('should throw an error if amount is less than 1000', () => {
        expect(() => calculateLoan(500, 24)).toThrow('Amount should be in range of £1000 to £20000');
    });

    test('should throw an error if amount is greater than 20000', () => {
        expect(() => calculateLoan(25000, 24)).toThrow('Amount should be in range of £1000 to £20000');
    });

    test('should throw an error if term is less than 12 months', () => {
        expect(() => calculateLoan(5000, 6)).toThrow('Term should be in range of 1 year to 5 years');
    });

    test('should throw an error if term is greater than 60 months', () => {
        expect(() => calculateLoan(5000, 72)).toThrow('Term should be in range of 1 year to 5 years');
    });

});

