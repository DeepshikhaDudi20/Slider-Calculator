
export const initialState = {
    amount:1000,
    term:12,
    interestRate:5,
    monthlyRepayment:86,
    showInput: false,
    error: false,
}
export const formData = {
  amountMinValue:1000,
  amountMaxValue:20000,
  amountStep:100,
  termMinValue:12,
  termMaxValue:60,
  termStep:6,
}

export const termOptions = [
    { value: "12", label: "1 Year" },
    { value: "18", label: "1½ Years" },
    { value: "24", label: "2 Years" },
    { value: "30", label: "2½ Years" },
    { value: "36", label: "3 Years" },
    { value: "42", label: "3½ Years" },
    { value: "48", label: "4 Years" },
    { value: "54", label: "4½ Years" },
    { value: "60", label: "5 Years" }
  ]

  export const validationMessage = {
   termValidationMessage: 'Term should be in range of 1 year to 5 years',
   amountValidationMessage: 'Amount should be in range of £1000 to £20000'
  }