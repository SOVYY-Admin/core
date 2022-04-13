import React from "react";
import PropTypes from 'prop-types';
import classes from "./backdrop.css";

 export const Backdrop = ({ color, opacity, ...props }) => {
  return (
    <div className={`sy-backdrop sy-backdrop--color--${color} sy-backdrop--opacity--${opacity}`}/>
  );
};

Backdrop.propTypes = {
  color: PropTypes.oneOf(['black', 'white']),
  opacity: PropTypes.oneOf(['0', '20', '50', '80']),
};

Backdrop.defaultProps = {
  color: 'black',
  opacity: '50',
};
