// Converts term from months to years with half-year precision 
// Exception handling added
const termToYear = (termInMonths: number): string => {
  if (termInMonths < 12 || termInMonths > 60) {
    throw new Error("Term should be in range of 1 year to 5 years");
  }

  let termInYears = Math.floor(termInMonths / 12).toString();

  if (termInMonths % 12 !== 0) {
    termInYears = `${termInYears}½ Year`;
  } else {
    termInYears += " Year";
  }
  if (termInMonths > 12) {
    termInYears += "s";
  }
  return termInYears;
};

// Calculates interest rate and monthly repayment based on selected amount and term value
const calculateLoan = (payload: { amount: number; term: number }): {
  amount: number;
  term: number;
  interestRate: number;
  monthlyRepayment: number;
} => {
  const amount = payload.amount;
  const term = payload.term;
  let interestRate = 5;

  if (amount > 5000 && amount <= 10000) {
    interestRate = 10;
  } else if (amount > 10000 && amount <= 15000) {
    interestRate = 15;
  } else if (amount >= 15000 && amount <= 20000) {
    interestRate = 20;
  }

  const monthlyRepayment = parseInt(monthlyRepaymentCalculator(amount, interestRate, term));

  return { amount, term, interestRate, monthlyRepayment };
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
