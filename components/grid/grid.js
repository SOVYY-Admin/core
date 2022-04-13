import React from "react";
import PropTypes from 'prop-types';
import classes from "./grid.css";

 export const Grid = ({ cols, gap, children, styling, ...props }) => {
  return (
    <div className={`sy-grid sy-grid--cols-${cols} sy-grid--gap-${gap}  ${styling}`}>
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
