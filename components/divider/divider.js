import React from "react";
import PropTypes from 'prop-types';
import styles from "./divider.css";

 export const Divider = ({ orientation, color, ...props }) => {
  return (
    <div
      className={`sy-divider sy-divider--${orientation} sy-divider--${color}`}
      {...props}
    >
    </div>
  );
};

Divider.propTypes = {
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  color: PropTypes.oneOf(['default','primary']),
};

Divider.defaultProps = {
  orientation: 'horizontal',
  color: 'default',
};
