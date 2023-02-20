import styled from 'styled-components';
import { colors } from '../../styles/color';

export const ToolTip = styled.div`
  position: absolute;
  left: 45%;
  top: 34%;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.42857143;
  text-align: start;
  text-shadow: none;
  text-transform: none;
  white-space: normal;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
  font-size: 12px;
  display: inline-block;
  margin-top: -5px;
  background-color: #002649;
  
  @media (max-width: 768px) {
    left: 57%;
    transform: translateX(-50%);
    top: 33%;
  }
`;
export const TooltipArrow = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-color: transparent;
  border-right-color: transparent;
  border-style: solid;
  top: -5px;
  left: 50%;
  margin-left: -29px;
  border-width: 0 5px 5px;
  border-bottom-color: #000;
`;
export const TooltipLabeL = styled.div`
  max-width: 200px;
  padding: 3px 3px;
  color: #fff;
  text-align: center;
  background-color: #002649;
  border-radius: 4px;
`;

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
  font-family: 'Open Sans';
`;

export const Label = styled.label`
  display: block;
  width: 100%;
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: lighter;
`;

export const FieldSliderValue = styled.span`
  padding-left: 8px;
  font-size: 26px;
  font-family: 'Open Sans';
  font-weight: normal;
  color: ${colors.black};
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