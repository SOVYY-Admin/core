import React from "react";
import PropTypes from 'prop-types';
import styles from "./section.module.css";

 export const Section = ({ size, spacing, styling, ...props }) => {
  return (
    <div
      className={`
      ${styles[`sy--button`]} 
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
  size: PropTypes.oneOf(['small', 'medium', 'large', 'full']),
  spacing: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  styling: PropTypes.string,
};

Section.defaultProps = {
  size: 'medium',
  spacing: 'small',
  styling: '',
};
