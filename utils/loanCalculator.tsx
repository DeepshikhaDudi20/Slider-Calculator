import { formData } from '../AppData/constants'

// Converts term from months to years with half-year precision
// Exception handling added
const termToYear = (termInMonths: number): string => {
  if (termInMonths < formData.termMinValue || termInMonths > formData.termMaxValue) {
    throw new Error("Term should be in range of 1 year to 5 years");
  }

  let termInYears = Math.floor(termInMonths / 12).toString();

  if (termInMonths % formData.termMinValue !== 0) {
    termInYears = `${termInYears}½ Year`;
  } else {
    termInYears += " Year";
  }
  if (termInMonths > formData.termMinValue) {
    termInYears += "s";
  }
  return termInYears;
};

// Calculates interest rate and monthly repayment based on selected amount and term value
const calculateLoan = (amountValue: number, termValue: number): {
  amountValue: number;
  termValue: number;
  interestRateValue: number;
  monthlyRepaymentValue: number;
} => {
  let interestRateValue = 5;

  // throw error if amount and term input is outside required range
  if (amountValue < formData.amountMinValue || amountValue > formData.amountMaxValue) {
    throw new Error("Amount should be in range of £1000 to £20000");
  }

  if (termValue < formData.termMinValue || termValue > formData.termMaxValue) {
    throw new Error("Term should be in range of 1 year to 5 years");
  }

  if (amountValue > 5000 && amountValue <= 10000) {
    interestRateValue = 10;
  } else if (amountValue > 10000 && amountValue <= 15000) {
    interestRateValue = 15;
  } else if (amountValue >= 15000 && amountValue <= 20000) {
    interestRateValue = 20;
  }

  const monthlyRepaymentValue = parseInt(monthlyRepaymentCalculator(amountValue, interestRateValue, termValue));

  return { amountValue, termValue, interestRateValue, monthlyRepaymentValue };
};

// Formula to calculate monthly repayment value
const monthlyRepaymentCalculator = (
  amount: number,
  interestRate: number,
  term: number
): string => {
  const loanAmount = amount || 0;
  const monthlyInterestRate = (interestRate / 12) * 0.01;
  const powFactor = Math.pow(1 + monthlyInterestRate, term);
  return ((loanAmount * monthlyInterestRate * powFactor) / (powFactor - 1)).toFixed(2);
};

export { termToYear, calculateLoan };


