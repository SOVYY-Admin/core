import React from "react";
import PropTypes from 'prop-types';
import classes from "./icon.css";
import FeatherIcon from 'feather-icons-react';

 export const Icon = ({ size, icon, styling, ...props }) => {
  return (
    <FeatherIcon icon={icon} className={`sy-icon sy-icon--${size} ${styling}`}
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
