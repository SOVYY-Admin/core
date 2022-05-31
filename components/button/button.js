import React from "react";
import PropTypes from 'prop-types';
import styles from "./button.module.css";
import Link from 'next/link'
import { Icon } from '../components';

 export const Button = ({ color, variant, size, full, label, startIcon, endIcon, href, onClick, styling, ...props }) => {
  if (href != '' && href != null) {
    return (
      <Link href={href}>
        <button
          type="button"
          onClick={onClick}
          className={`
          ${styles[`sy--button`]} 
          ${styles[`sy--size--${size}`]} 
          ${styles[`sy--variant--${color}-${variant}`]}
          ${full == true ? styles[`sy--full`] : ''}
          ${styling}  
          `}
          {...props}
        >
          {startIcon === null ? '' : <Icon icon={startIcon} size="flex" styling="mr-0.5em"/>}
          {label}
          {endIcon === null ? '' : <Icon icon={endIcon} size="flex" styling="ml-0.5em"/>}
        </button>
      </Link>
    ); 
} else {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
      ${styles[`sy--button`]} 
      ${styles[`sy--size--${size}`]} 
      ${styles[`sy--variant--${color}-${variant}`]}
      ${full == true ? styles[`sy--full`] : ''}
      ${styling}  
      `}
      {...props}
    >
      {startIcon === null ? '' : <Icon icon={startIcon} size="flex" styling="mr-0.5em"/>}
      {label}
      {endIcon === null ? '' : <Icon icon={endIcon} size="flex" styling="ml-0.5em"/>}
    </button>
  );
};
}; 

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'neutral']),
  variant: PropTypes.oneOf(['contained', 'outlined', 'ghost']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  full: PropTypes.bool,
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
  full: false,
  startIcon: '',
  endIcon: '',
  onClick: undefined,
  href: '',
  endIcon: '',
  styling: '',
};
