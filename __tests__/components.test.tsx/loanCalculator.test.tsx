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
    it('should calculate monthly repayment for amount 5000 and term 12', () => {
        const payload = { amount: 5000, term: 12 };
        const expected = {
            amount: 5000,
            term: 12,
            interestRate: 5,
            monthlyRepayment: 428,
        };
        expect(calculateLoan(payload)).toEqual(expected);
    });

    it('should calculate monthly repayment for amount 10000 and term 18', () => {
        const payload = { amount: 10000, term: 18 };
        const expected = {
            amount: 10000,
            term: 18,
            interestRate: 10,
            monthlyRepayment: 600,
        };
        expect(calculateLoan(payload)).toEqual(expected);
    });

    it('should calculate monthly repayment for amount 15000 and term 24', () => {
        const payload = { amount: 15000, term: 24 };
        const expected = {
            amount: 15000,
            term: 24,
            interestRate: 15,
            monthlyRepayment: 727,
        };
        expect(calculateLoan(payload)).toEqual(expected);
    });

    it('should calculate monthly repayment for amount 20000 and term 36', () => {
        const payload = { amount: 20000, term: 36 };
        const expected = {
            amount: 20000,
            term: 36,
            interestRate: 20,
            monthlyRepayment: 743,
        };
        expect(calculateLoan(payload)).toEqual(expected);
    });
});
