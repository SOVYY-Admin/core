import React from "react";
import PropTypes from 'prop-types';
import styles from "./grid.module.css";

 export const Grid = ({ cols, mdcols, lgcols, xlcols, gap, children, styling, ...props }) => {
  return (
    <div className={`
    ${styles[`sy--grid`]} 
    ${styles[`sy--cols--${cols}`]}
    ${styles[`sy--mdcols--${mdcols}`]} 
    ${styles[`sy--lgcols--${lgcols}`]}
    ${styles[`sy--xlcols--${xlcols}`]} 
    ${styles[`sy--gap--${gap}`]} 
    ${styling} 
    `}>
      {children}
    </div> 
  );
};

Grid.propTypes = {
  cols: PropTypes.oneOf(['1', '2', '3', '4', '8', '12']),
  mdcols: PropTypes.oneOf(['1', '2', '3', '4', '8', '12']),
  lgcols: PropTypes.oneOf(['1', '2', '3', '4', '8', '12']),
  xlcols: PropTypes.oneOf(['1', '2', '3', '4', '8', '12']),
  gap: PropTypes.oneOf(['0', '1', '2', '3', '4', '8', '12']),
  styling: PropTypes.string,
};

Grid.defaultProps = {
  cols: '1',
  mdcols: '2',
  lgcols: '2',
  gap: '16',
  styling: '',
};
