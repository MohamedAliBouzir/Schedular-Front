/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import { FC, InputHTMLAttributes } from 'react';
import { TInputTypes } from '../../../type/input-type';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: TInputTypes;
  value: string | number | undefined;
  onChange?(...args: unknown[]): unknown;
}

const Input: FC<IInputProps> = ({ name, type, value, onChange, ...props }) => {
  return (
    <div className='input-container'>
      <input
        id={name}
        name={name}
        type={type}
        {...props}
        placeholder={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'text',
    'email',
    'password',
    'file',
    'color',
    'date',
    'datetime-local',
    'hidden',
    'month',
    'number',
    'range',
    'search',
    'tel',
    'time',
    'url',
    'week',
  ]),
  // @ts-ignore
  // eslint-disable-next-line react/require-default-props
  value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};

Input.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  name: undefined,
  type: undefined,
  value: undefined,
  onChange: undefined,
};

export default Input;
