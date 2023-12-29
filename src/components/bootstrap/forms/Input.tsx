import { forwardRef, HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TInputTypes } from '../../../type/input-type';

export interface IInputProps extends HTMLAttributes<HTMLInputElement> {
  type?: TInputTypes;
  id?: string;
  name?: string;
  size?: 'lg' | 'sm' | null;
  className?: string;
  required?: boolean;
  placeholder?: string;
  title?: string;
  autoComplete?: string;
  disabled?: boolean;
  readOnly?: boolean | 'plaintext';
  ariaDescribedby?: string;
  ariaLabelledby?: string;
  ariaLabel?: string;
  value?: string | number | readonly string[] | undefined;
  onChange?(...args: unknown[]): unknown;
  onInput?(...args: unknown[]): unknown;
  onInvalid?(...args: unknown[]): unknown;
  onSelect?(...args: unknown[]): unknown;
}
const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      type,
      id,
      name,
      className,
      required,
      placeholder,
      autoComplete,
      ariaDescribedby,
      ariaLabelledby,
      ariaLabel,
      title,
      size,
      disabled,
      readOnly,
      value,
      onChange,
      onInput,
      onInvalid,
      onSelect,
      ...props
    },
    ref
  ) => {
    const PROPS = {
      id,
      name: name === null ? id : name,
      type: undefined,
      className: classNames(
        {
          'form-control': readOnly !== 'plaintext' && type !== 'range',
          'form-range': type === 'range',
          'form-control-plaintext': readOnly === 'plaintext',
          'form-control-color': type === 'color',
          [`form-control-${size}`]: size,
        },
        className
      ),
      required,
      placeholder,
      title,
      disabled,
      readOnly: !!readOnly,
      autoComplete,
      'aria-describedby': ariaDescribedby,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      value: typeof value === undefined && type !== 'file' ? '' : value,
      onChange: readOnly ? undefined : onChange,
      onInput,
      onInvalid,
      onSelect,
      ...props,
    };
    return (
      <>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <input ref={ref} {...PROPS} />
      </>
    );
  }
);
Input.displayName = 'Input';
Input.propTypes = {
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
  id: PropTypes.string,
  /**
   * If the name value is left blank, the id value is assigned.
   */
  name: PropTypes.string,
  size: PropTypes.oneOf(['lg', 'sm']),
  className: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  /**
   * The *title* global attribute contains text representing advisory information related to the element it belongs to.
   */
  title: PropTypes.string,
  autoComplete: PropTypes.string,
  /**
   * A *disabled* element isn't editable and isn't sent on submit.
   */
  disabled: PropTypes.bool,
  /**
   * A *readOnly* element is just not editable, but gets sent when the according *form* submits.
   */
  // @ts-expect-error readOnly
  readOnly: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['plaintext'])]),
  ariaDescribedby: PropTypes.string,
  ariaLabelledby: PropTypes.string,
  ariaLabel: PropTypes.string,
  /**
   * For formik ***`formik.values.ID_OR_NAME`***
   */
  // @ts-expect-error value
  // eslint-disable-next-line react/require-default-props
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  /**
   * Fires the moment when the value of the element is changed. For formik ***`formik.handleChange`***
   */
  onChange: PropTypes.func,
  /**
   * Script to be run when an element gets user input
   */
  onInput: PropTypes.func,
  /**
   * Script to be run when an element is invalid
   */
  onInvalid: PropTypes.func,
  /**
   * Fires after some text has been selected in an element
   */
  onSelect: PropTypes.func,
};
Input.defaultProps = {
  type: 'text',
  id: undefined,
  name: undefined,
  size: null,
  className: undefined,
  required: false,
  placeholder: undefined,
  title: undefined,
  autoComplete: undefined,
  disabled: false,
  readOnly: false,
  ariaDescribedby: undefined,
  ariaLabelledby: undefined,
  ariaLabel: undefined,
  value: undefined,
  onChange: undefined,
  onInput: undefined,
  onInvalid: undefined,
  onSelect: undefined,
};

export default Input;
