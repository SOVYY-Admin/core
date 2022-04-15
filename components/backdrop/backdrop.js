import React from "react";
import PropTypes from 'prop-types';
import styles from "./backdrop.module.css";

 export const Backdrop = ({ color, opacity, styling, ...props }) => {
  return (
    <div className={`
      ${styles[`sy--backdrop`]} 
      ${styles[`sy--color--${color}`]} 
      ${styles[`sy--opacity--${opacity}`]}
      ${styling}
    `}/>
  );
};

Backdrop.propTypes = {
  color: PropTypes.oneOf(['black', 'white']),
  opacity: PropTypes.oneOf(['0', '20', '50', '80']),
  styling: PropTypes.string,
};

Backdrop.defaultProps = {
  color: 'black',
  opacity: '50',
  styling: '',
};
