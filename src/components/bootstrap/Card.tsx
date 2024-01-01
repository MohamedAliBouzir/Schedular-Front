import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';

interface ICardProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

const Card: FC<ICardProps> = ({ id, className, children, ...props }) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={classNames('card-style', className)} {...props}>
      {children}
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Card.defaultProps = {
  id: undefined,
  className: undefined,
};

export default Card;
