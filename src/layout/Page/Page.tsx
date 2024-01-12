import { forwardRef, ReactNode } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export interface IPageProps {
  children: ReactNode;
  className?: string;
}
const Page = forwardRef<HTMLDivElement, IPageProps>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={classNames('page', className)}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}>
      {children}
    </div>
  );
});
Page.displayName = 'Page';
Page.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
Page.defaultProps = {
  className: undefined,
};

export default Page;
