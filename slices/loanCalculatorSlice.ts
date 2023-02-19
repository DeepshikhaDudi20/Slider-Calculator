
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { calculateLoan } from '../utils/loanCalculator'

export interface LoanCalculatorData {
  amount: number;
  term: number;
}

interface LoanCalculatorState extends LoanCalculatorData {
  interestRate: number;
  monthlyRepayment: number;
}

const initialState: LoanCalculatorState = {
  amount: 1000,
  term: 12,
  interestRate: 5,
  monthlyRepayment: 86,
};

const loanCalculatorSlice = createSlice({
  name: 'loanCalculator',
  initialState,
  reducers: {
    loanCalculator(state: LoanCalculatorState, action: PayloadAction<LoanCalculatorData>): LoanCalculatorState {
      const { amount, term } = action.payload;
      const { interestRate, monthlyRepayment } = calculateLoan({ amount, term });
      return {
        ...state,
        amount,
        term,
        interestRate,
        monthlyRepayment,
      };
    }
  }
});

export const { loanCalculator } = loanCalculatorSlice.actions
export default loanCalculatorSlice.reducer


