import React from "react";
import PropTypes from 'prop-types';
import FeatherIcon from "feather-icons-react";
import styles from "./chip.module.css";

 export const Chip = ({ color, variant, size, label, styling, ...props }) => {
  return (
    <div
      className={`
      ${styles[`sy--chip`]} 
      ${styles[`sy--size--${size}`]} 
      ${styles[`sy--variant--${color}-${variant}`]} 
      ${styling}  
      `}
      {...props}
    >
       {label}
    </div>
  );
};

Chip.propTypes = {
  color: PropTypes.oneOf(['default']),
  variant: PropTypes.oneOf(['contained', 'outlined']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  styling: PropTypes.string,
};

Chip.defaultProps = {
  label: 'Chip',
  color: 'default',
  variant: 'contained',
  size: 'small',
  onClick: undefined,
  styling: '',
};
