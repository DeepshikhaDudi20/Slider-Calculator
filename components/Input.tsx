import React, { FC } from 'react';
import { EditableInput } from './layout/Form';

interface Props {
  min: number;
  max: number;
  type: string;
  dataTestId: string;
  value: string | number;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocusHandler?: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Input: FC<Props> = (props) => {
  return (
    <>
      <EditableInput
        min={props.min}
        max={props.max}
        type={props.type}
        data-testid={props.dataTestId}
        value={props.value}
        onChange={props.onChangeHandler}
        onBlur={props.onFocusHandler}
      />
    </>
  );
};

export default Input;
