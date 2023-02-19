import styled from 'styled-components';
import { colors } from '../../styles/color';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0 auto;
  width: 350px;
  font-size: 15px;
  border-radius: 3px;
  background-color: ${colors.white};
`;

export const ToggleIcon = styled.div`
  margin-left: 280px;
  margin-top: 10px;
`;

export const FieldWithSlider = styled.div`
  width: 100%;
  padding: 12px 20px;
  font-size: 18px;
  font-family: 'Open Sans';
  font-weight: normal;
`;

export const Label = styled.label`
  display: block;
  width: 100%;
  margin-bottom: 12px;
`;

export const FieldSliderValue = styled.span`
  padding-left: 8px;
  font-size: 25px;
  font-family: 'Open Sans';
  font-weight: lighter;
  color: ${colors.mediumLightGrey};
`;

export const EditableField = styled.div`
  margin-bottom: 10px;
  width: 100%;
`;

export const EditableInput = styled.input`
  border-radius: 5px;
  width: 300px;
  height: 55px;
  outline: none;
  text-align: center;
  font-size: 20px;
  border: 1px solid ${colors.lightGrey};

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const EditableSelect = styled.select`
  border-radius: 5px;
  width: 300px;
  height: 55px;
  outline: none;
  text-align: center;
  font-size: 20px;
  background-color: ${colors.white};
  border: 1px solid ${colors.lightGrey};
`;

export const SliderInput = styled.input`
  appearance: none;
  width: 100%;
  height: 6px;
  border-radius: 5px;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: ${colors.pink};
    border-radius: 50%;
    -webkit-box-shadow: 0 0 0 6px rgba(247, 143, 185, 1);
    -moz-box-shadow: 0 0 0 6px rgba(247, 143, 185, 1);
    box-shadow: 0 0 0 6px rgba(247, 143, 185, 1);
    width: 21px;
    height: 21px;
    margin-top: -7px;
  }

  &::-webkit-slider-runnable-track {
    background: ${colors.lightPink};
    height: 6px;
  }

  &::-moz-range-thumb {
    color: ${colors.pink};
    border: 1px solid ${colors.pink};
    background: ${colors.pink};
    -webkit-box-shadow: 0 0 0 4px rgba(247, 143, 185, 1);
    -moz-box-shadow: 0 0 0 4px rgba(247, 143, 185, 1);
    box-shadow: 0 0 0 4px rgba(247, 143, 185, 1);
    width: 21px;
    height: 21px;
    margin-top: -7px;
  }
`;