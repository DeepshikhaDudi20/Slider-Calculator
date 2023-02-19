import React, { FC } from 'react';
import { EditableInput } from './layout/Form';
import PropTypes from 'prop-types';

interface InputProps {
  type: string;
  dataTestId: string;
  value: number;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocusHandler?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = (props) => {
  return (
      <EditableInput
          type={props.type}
          data-testid={props.dataTestId}
          value={props.value}
          onChange={props.onChangeHandler}
          onBlur={props.onFocusHandler}
      />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  onFocusHandler: PropTypes.func,
};

export default Input;
