import React from "react";
import PropTypes from 'prop-types';
import classes from "./stack.css";

 export const Stack = ({ orientation, gap, children, styling, ...props }) => {
  return (
    <div
      className={`sy-stack sy-stack--${orientation} sy-stack--gap-${gap} ${styling}`}
      {...props}
    >
      {children}
    </div>
  );
};

Stack.propTypes = {
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  gap: PropTypes.oneOf(['flex', '0', '1', '2', '3', '4', '8', '12']),
  styling: PropTypes.string,
};

Stack.defaultProps = {
  orientation: 'horizontal',
  gap: '2',
  styling: '',
};
