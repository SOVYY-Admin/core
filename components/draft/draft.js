import React from "react";
import PropTypes from 'prop-types';
import styles from "./draft.css";

 export const Draft = ({ select, string, boolean, object, ...props }) => {
  return (
    <div className={`sy-draft sy-draft--${select}`}>
      {select} <br />
      {string} <br />
      { boolean === true ? <span>Boolean</span> : ""} <br />
      {object.data.map(data =><div>{data.label}</div>)}
    </div> 
  );
};

Draft.propTypes = {
  select: PropTypes.oneOf(['A', 'B', 'C']),
  string: PropTypes.string,
  boolean: PropTypes.bool,
  object: PropTypes.object,
};

Draft.defaultProps = {
  select: 'A',
  string: 'String',
  boolean: true,
  object: {  
    "data":[
      {"id":1,"label":"A"},
      {"id":2,"label":"B"},
      {"id":3,"label":"C"},
      ],
  }
};
