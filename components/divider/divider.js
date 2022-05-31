import React from "react";
import PropTypes from 'prop-types';
import styles from "./divider.module.css";

 export const Divider = ({ orientation, color, styling, ...props }) => {
  return (
    <div
      className={`
      ${styles[`sy--divider`]} 
      ${styles[`sy--orientation--${orientation}`]} 
      ${styles[`sy--color--${color}`]} 
      ${styling}
      `}
      {...props}
    />
  );
};

Divider.propTypes = {
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  color: PropTypes.oneOf(['neutral','primary']),
  styling: PropTypes.string,
};

Divider.defaultProps = {
  orientation: 'horizontal',
  color: 'neutral',
  styling: '',
};
