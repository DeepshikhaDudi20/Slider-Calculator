import React, { useState } from 'react';
import { FaExchangeAlt } from 'react-icons/fa';
import { FormContainer, ToggleIcon, FieldWithSlider, FieldSliderValue, EditableField, Label, ToolTip, TooltipArrow, TooltipLabeL } from '../layout/Form';
import { formData } from '../../AppData/constants';
import { termToYear, calculateLoan } from '../../utils/loanCalculator';
import { termOptions } from '../../AppData/constants';
import QuoteFooter from './QuoteFooter';
import Slider from '../Slider';
import Select from '../Select';
import Input from '../Input';
import { initialState } from '../../AppData/constants'

const QuotePreviewForm = () => {
  const [showInput, setShowInput] = useState(initialState.showInput);
  const [error, setError] = useState(initialState.error);
  const [amount, setAmount] = useState(initialState.amount);
  const [term, setTerm] = useState(initialState.term);
  const [interestRate, setInterestRate] = useState(initialState.interestRate);
  const [monthlyRepayment, setMonthlyRepayment] = useState(initialState.monthlyRepayment);

  // Called on amount input focus out, sets all other required values based on calculateLoan function result
  const amountFocusHandler = (e: React.FormEvent<HTMLInputElement>) => {
    try {
      let amountInputValue = parseInt(e.currentTarget.value);
      if (amountInputValue < formData.amountMinValue) amountInputValue = formData.amountMinValue;
      if (amountInputValue > formData.amountMaxValue) amountInputValue = formData.amountMaxValue;
      const { amountValue, termValue, interestRateValue, monthlyRepaymentValue } = calculateLoan(amountInputValue, term)
      setAmount(amountValue)
      setTerm(termValue)
      setError(false)
      setInterestRate(interestRateValue)
      setMonthlyRepayment(monthlyRepaymentValue)
    }
    catch (error) {
      console.log(`Error occurred while amount input is focused out ${error}`);
    }
  }

  // Called on amount input and slider change
  // In case of amount slider, sets all other required values based on calculateLoan function result
  // In case of amount input, display tooltip if amount value is outside desired range and set shows error tip based on result
  const amountChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      let amount = parseInt(e.target.value);
      if (e.target.id === 'loan-amount-slider') {
        const { amountValue, termValue, interestRateValue, monthlyRepaymentValue } = calculateLoan(amount, term)
        setAmount(amountValue)
        setTerm(termValue)
        setInterestRate(interestRateValue)
        setMonthlyRepayment(monthlyRepaymentValue)
      }
      else {
        setAmount(amount)
        setError(false)
        if (amount < formData.amountMinValue || amount > formData.amountMaxValue) {
          setError(true)
        }
      }
    }
    catch (error) {
      console.log(`Error occurred while amount value is changed ${error}`);
    }
  }

  // Called on term slider input or select change, sets all other required values based on calculateLoan function result
  const termChangeHandler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    try {
      const { amountValue, termValue, interestRateValue, monthlyRepaymentValue } = calculateLoan(amount, parseInt(e.target.value))
      setAmount(amountValue)
      setTerm(termValue)
      setInterestRate(interestRateValue)
      setMonthlyRepayment(monthlyRepaymentValue)
    }
    catch (error) {
      console.log(`Error occurred while term value is changed ${error}`);
    }
  }

  return (
    <FormContainer data-testid='quote-form-preview'>
      <ToggleIcon>
        <FaExchangeAlt data-testid='toggle-icon' onClick={() => setShowInput(value => !value)} />
      </ToggleIcon>

      <FieldWithSlider data-testid='amount-field'>
        <Label aria-label="loan-amount-label" htmlFor="loan-amount-slider">
          I want to borrow
          {!showInput && (
            <FieldSliderValue id="loan-amount-value" data-testid='loan-amount'>
              £{amount}
            </FieldSliderValue>
          )}
        </Label>
        {!showInput && (
          <Slider
            id="loan-amount-slider"
            min={formData.amountMinValue}
            max={formData.amountMaxValue}
            step={formData.amountStep}
            defaultValue={amount}
            onChangeHandler={amountChangeHandler}
          />
        )}

        {showInput && (
          <div>
            <EditableField>
              <Input type="number" dataTestId="loan-amount-input" value={amount}
                onChangeHandler={amountChangeHandler}
                onFocusHandler={amountFocusHandler} />
            </EditableField>
            {error && (
              <ToolTip data-role="field-tip" id="tooltip">
                <TooltipArrow id="tooltip-arrow" />
                <TooltipLabeL id="tooltip-label">Amount must be between £1,000.00 and £20,000.00</TooltipLabeL>
              </ToolTip>
            )}
          </div>
        )
        }
      </FieldWithSlider>

      <FieldWithSlider data-testid='term-field'>
        <Label aria-label="loan-term-label" htmlFor="loan-term-slider">
          Over
          {!showInput && (
            <FieldSliderValue id="loan-term-value" data-testid='loan-term'>
              {termToYear(term)}
            </FieldSliderValue>
          )}
        </Label>
        {!showInput && (
          <Slider
            id="loan-term-slider"
            min={formData.termMinValue}
            max={formData.termMaxValue}
            step={formData.termStep}
            defaultValue={term}
            onChangeHandler={termChangeHandler}
          />
        )}

        {showInput &&
          <EditableField>
            <Select name="loan-term-select" dataTestId="loan-term-select" value={term} options={termOptions}
              onChangeHandler={termChangeHandler} />
          </EditableField>}
      </FieldWithSlider>
      <QuoteFooter interest={interestRate} repayment={monthlyRepayment} />
    </FormContainer>
  );
}

export default QuotePreviewForm;
