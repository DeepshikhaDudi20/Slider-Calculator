import React, { FC } from 'react';
import { EditableSelect } from './layout/Form';
import PropTypes from 'prop-types';

interface SelectProps {
  dataTestId: string;
  name: string;
  value: number;
  options: { label: string; value: string }[];
  onChangeHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: FC<SelectProps> = ({
                                   dataTestId,
                                   name,
                                   value,
                                   options,
                                   onChangeHandler,
                                 }) => {
  return (
      <>
        <EditableSelect data-testid={dataTestId} name={name} value={value} onChange={onChangeHandler}>
          {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
          ))}
        </EditableSelect>
      </>
  );
};

export default Select;

Select.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      }).isRequired,
  ).isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};