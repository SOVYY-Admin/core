import React from "react";
import PropTypes from 'prop-types';
import styles from "./draft.css";

 export const Draft = ({ select, string, boolean, object, ...props }) => {
  return (
    <div className={`
    ${styles[`sy--draft`]} 
    ${styles[`sy--attribute--${select}`]} 
    ${styling}  
    `}>
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
  styling: PropTypes.string,
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
  },
  styling: '',
};
