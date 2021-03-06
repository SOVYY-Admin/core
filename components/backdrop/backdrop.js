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
  opacity: PropTypes.oneOf(['o0', 'o20', 'o50', 'o80']),
  styling: PropTypes.string,
};

Backdrop.defaultProps = {
  color: 'black',
  opacity: 'o50',
  styling: '',
};
