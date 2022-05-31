import React from "react";
import PropTypes from 'prop-types';
// import components
import Link from 'next/link'
import { Icon } from '../components';
import styles from "./iconbutton.module.css";

 export const IconButton = ({ color, variant, size, icon, href, onClick, styling, ...props }) => {
  if (href != '' && href != null) {
    return (
      <Link href={href}>
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
          {icon === undefined ? '' : <Icon icon={icon}/>}
        </button>
      </Link>
    ); 
} else {
  return (
    <button
    type="button"
    className={`
    ${styles[`sy--icon-button`]} 
    ${styles[`sy--size--${size}`]} 
    ${styles[`sy--variant--${color}-${variant}`]} 
    ${styling}  
    `}
    onClick={onClick}
    {...props}
  >
    {icon === undefined ? '' : <Icon icon={icon}/>}
  </button>
  );
};
}; 

IconButton.propTypes = {
  color: PropTypes.oneOf(['primary', 'neutral']),
  variant: PropTypes.oneOf(['contained', 'outlined' , 'ghost']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  styling: PropTypes.string,
};

IconButton.defaultProps = {
  icon: 'image',
  color: 'neutral',
  variant: 'contained',
  size: 'medium',
  onClick: undefined,
  styling: '',
};
