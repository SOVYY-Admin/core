import React from "react";
import PropTypes from 'prop-types';
import styles from "./grid.module.css";

 export const Grid = ({ cols, gap, children, styling, ...props }) => {
  return (
    <div className={`
    ${styles[`sy--grid`]} 
    ${styles[`sy--cols--${cols}`]} 
    ${styles[`sy--gap--${gap}`]} 
    ${styling} 
    `}>
      {children}
    </div> 
  );
};

Grid.propTypes = {
  cols: PropTypes.oneOf(['1', '2', '3', '4', '8', '12']),
  gap: PropTypes.oneOf(['0', '1', '2', '3', '4', '8', '12']),
  styling: PropTypes.string,
};

Grid.defaultProps = {
  cols: '4',
  gap: '2',
  styling: '',
};
