import React from "react";
import PropTypes from 'prop-types';
import styles from "./text.module.css";

 export const Text = ({ children, tag, variant, styling, ...props }) => {
  const CustomTag = `${tag}`;
  return (
    <CustomTag className={`
    ${styles[`sy--text`]} 
    ${styles[`sy--variant--${variant}`]} 
    ${styling}  
    `}>
      {children}
    </CustomTag> 
  );
};

Text.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']),
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body', 'body2', 'caption']),
  styling: PropTypes.string,
};

Text.defaultProps = {
  tag: 'p',
  variant: 'body',
  styling: ''
};
