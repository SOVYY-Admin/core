import React from "react";
import PropTypes from 'prop-types';
import { Icon } from '../icon/icon';
import styles from "./button.module.css";

 export const Button = ({ color, variant, size, label, startIcon, endIcon, onClick, styling, ...props }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
      ${styles[`sy--button`]} 
      ${styles[`sy--size--${size}`]} 
      ${styles[`sy--variant--${color}-${variant}`]} 
      ${styling}  
      `}
      {...props}
    >
      {startIcon === undefined ? '' : <Icon icon={startIcon} size="flex" styling="mr-0.5em"/>}
      {label}
      {endIcon === undefined ? '' : <Icon icon={endIcon} size="flex" styling="ml-0.5em"/>}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']),
  variant: PropTypes.oneOf(['contained', 'outlined', 'ghost']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  startIcon: PropTypes.string,
  endIcon: PropTypes.string,
  onClick: PropTypes.func,
  styling: PropTypes.string,
};

Button.defaultProps = {
  label: 'Button',
  color: 'primary',
  variant: 'contained',
  size: 'medium',
  startIcon: '',
  endIcon: '',
  onClick: undefined,
  styling: '',
};
