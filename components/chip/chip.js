import React from "react";
import PropTypes from 'prop-types';
import FeatherIcon from "feather-icons-react";
import styles from "./chip.css";

 export const Chip = ({ color, variant, size, label, ...props }) => {
  return (
    <div
      className={`sy-chip sy-chip--${size} sy-chip--${color}-${variant}`}
      {...props}
    >
       {label}
    </div>
  );
};

Chip.propTypes = {
  color: PropTypes.oneOf(['default']),
  variant: PropTypes.oneOf(['contained', 'outlined']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Chip.defaultProps = {
  label: 'Chip',
  color: 'default',
  variant: 'contained',
  size: 'small',
  onClick: undefined,
};
