import React from "react";
import PropTypes from 'prop-types';
import styles from "./section.module.css";

 export const Section = ({ size, spacing, styling, ...props }) => {
  return (
    <div
      className={`
      ${styles[`sy--section`]} 
      ${styles[`sy--size--${size}`]} 
      ${styles[`sy--spacing--${spacing}`]} 
      ${styling}  
      `}
      {...props}
    >
    </div>
  );
};

Section.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large', 'screen']),
  spacing: PropTypes.oneOf(['none', 'small', 'medium', 'large', 'screen']),
  styling: PropTypes.string,
};

Section.defaultProps = {
  size: 'large',
  spacing: 'medium',
  styling: '',
};
