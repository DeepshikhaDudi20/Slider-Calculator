import React, { FC } from 'react';
import { SliderInput } from './layout/Form';

interface SliderProps {
  id: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Slider: FC<SliderProps> = ({
  id,
  min,
  max,
  step,
  defaultValue,
  onChangeHandler,
}) => {
  return (
    <SliderInput
      type="range"
      role="slider"
      id={id}
      min={min}
      max={max}
      step={step}
      defaultValue={defaultValue}
      onChange={onChangeHandler}
    />
  );
};

export default Slider;
