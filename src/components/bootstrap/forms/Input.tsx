/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import { FC, InputHTMLAttributes } from 'react';
import { TInputTypes } from '../../../type/input-type';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: TInputTypes;
}

const Input: FC<IInputProps> = ({ name, type, ...rest }) => {
  return (
    <div className='input-container'>
      <input id={name} name={name} type={type} {...rest} placeholder={name} />
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
};

export default Input;
