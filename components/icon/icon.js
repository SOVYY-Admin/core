import React from "react";
import PropTypes from 'prop-types';
import styles from "./icon.module.css";
import FeatherIcon from 'feather-icons-react';

 export const Icon = ({ size, icon, styling, ...props }) => {
  return (
    <FeatherIcon icon={icon} 
    className={`
    ${styles[`sy--icon`]} 
    ${styles[`sy--size--${size}`]} 
    ${styling}
    `}
    {...props}/>
  );
};

Icon.propTypes = {
  size: PropTypes.oneOf(['4', '6', '8', '12']),
  icon: PropTypes.string.isRequired,
  stylging: PropTypes.string,
};

Icon.defaultProps = {
  size: '6',
  icon: 'image',
  styling: '',
};
