import React from "react";
import PropTypes from 'prop-types';
import { Icon } from '../icon/icon';
import styles from "./iconbutton.module.css";

 export const IconButton = ({ color, variant, size, icon, styling, ...props }) => {
  return (
    <button
      type="button"
      className={`
      ${styles[`sy--icon-button`]} 
      ${styles[`sy--size--${size}`]} 
      ${styles[`sy--variant--${color}-${variant}`]} 
      ${styling}  
      `}
      {...props}
    >
      {icon === undefined ? '' : <Icon icon={icon} size="flex"/>}
    </button>
  );
};

IconButton.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']),
  variant: PropTypes.oneOf(['contained', 'outlined']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  styling: PropTypes.string,
};

IconButton.defaultProps = {
  icon: 'Button',
  color: 'primary',
  variant: 'contained',
  size: 'medium',
  onClick: undefined,
  styling: '',
};
