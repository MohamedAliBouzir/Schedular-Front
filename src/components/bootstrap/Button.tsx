import PropTypes from 'prop-types';
import { ReactNode, forwardRef } from 'react';
import classNames from 'classnames';
import TagWrapper from '../TagWrapper';

interface IButtonProps {
  children: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  tag?: 'button' | 'a' | 'link';
  onClick?(...args: unknown[]): unknown;
}

const Button = forwardRef<HTMLAnchorElement, IButtonProps>(
  ({ children, type, tag, className, ...props }, ref) => {
    const BTN_CLASSNAME = classNames('btn', className);
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <TagWrapper ref={ref} tag={tag} className={BTN_CLASSNAME} {...props}>
        {children}
      </TagWrapper>
    );
  }
);

Button.displayName = 'Button';
Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOf(['button', 'a', 'link']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
};
Button.defaultProps = {
  children: null,
  className: undefined,
  tag: 'button',
  type: 'button',
  onClick: undefined,
};

export default Button;
