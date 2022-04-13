import React from "react";
import PropTypes from 'prop-types';
import classes from "./section.css";

 export const Section = ({ size, spacing, styling, ...props }) => {
  return (
    <div
      className={`sy-section sy-section--${size} sy-section--spacing--${spacing} ${styling}`}
      {...props}
    >
    </div>
  );
};

Section.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large', 'full']),
  spacing: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  styling: PropTypes.string,
};

Section.defaultProps = {
  size: 'medium',
  spacing: 'small',
  styling: '',
};
