import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Content from '../Content/Content';

interface IWrapperContainerProps {
  children: ReactNode;
  className?: string;
}
export const WrapperContainer: FC<IWrapperContainerProps> = ({ children, className, ...props }) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={classNames('wrapper', className)} {...props}>
      {children}
    </div>
  );
};

WrapperContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

WrapperContainer.defaultProps = {
  className: undefined,
};

const Wrapper = () => {
  return (
    <WrapperContainer>
      <Content />
    </WrapperContainer>
  );
};

export default Wrapper;
