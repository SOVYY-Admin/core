import React from "react";
import PropTypes from 'prop-types';
import styles from "./stack.module.css";

 export const Stack = ({ orientation, gap, children, styling, ...props }) => {
  return (
    <div
      className={`
      ${styles[`sy--stack`]} 
      ${styles[`sy--orientation--${orientation}`]} 
      ${styles[`sy--gap--${gap}`]} 
      ${styling}  
      `}
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
