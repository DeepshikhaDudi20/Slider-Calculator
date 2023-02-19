import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaExchangeAlt } from 'react-icons/fa';
import { FormContainer, ToggleIcon, FieldWithSlider, FieldSliderValue, EditableField, Label } from '../layout/Form';
import { loanCalculator } from '../../slices/loanCalculatorSlice';
import { formData } from '../../AppData/constants';
import { termToYear } from '../../utils/loanCalculator';
import { termOptions } from '../../AppData/constants';
import { AppState } from '../../store/store';
import QuoteFooter from './QuoteFooter';
import Slider from '../Slider';
import Select from '../Select';
import Input from '../Input';

const QuotePreviewForm = () => {
  const [showInput, setShowInput] = useState(false);
  const dispatch = useDispatch();

  const { amount, term, interestRate, monthlyRepayment } = useSelector((state: AppState) => state.loanCalculator);

  const amountFocusHandler = (e: React.FormEvent<HTMLInputElement>) => {
    try{
    let amount = parseInt(e.currentTarget.value);
    if (amount < formData.amountMinValue) amount = formData.amountMinValue;
    if (amount > formData.amountMaxValue) amount = formData.amountMaxValue;
    dispatch(loanCalculator({ amount: amount, term: term }));
    }
    catch (error) {
      console.log(`Error occurred while amount input is focused out ${error}`);
    }
  };

  const amountChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    try{
    dispatch(loanCalculator({ amount: parseInt(e.target.value), term: term }));
    }
    catch (error) {
      console.log(`Error occurred while amount value is changed ${error}`);
    }
  };

  const termChangeHandler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    try{
    dispatch(loanCalculator({ amount: amount, term: parseInt(e.target.value) }));
    }
    catch (error) {
      console.log(`Error occurred while term value is changed ${error}`);
    }
  };

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
          <EditableField>
            <Input type="number" dataTestId="loan-amount-input" value={amount}
            onChangeHandler={amountChangeHandler}
            onFocusHandler={amountFocusHandler} min={1000} max={20000}            />
          </EditableField>
        )}
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
            <Select name="loan-term" dataTestId="loan-term-input" value={term} options={termOptions}
              onChangeHandler={termChangeHandler} />
          </EditableField>}
      </FieldWithSlider>
      <QuoteFooter interest={interestRate} repayment={monthlyRepayment} />
    </FormContainer>
  );
}

export default React.memo(QuotePreviewForm);
