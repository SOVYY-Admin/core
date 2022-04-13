import React from "react";
import PropTypes from 'prop-types';
import classes from "./image.css";
import { Backdrop } from '../backdrop/backdrop';

 export const Image = ({ variant, src, children, styling, backdropcolor, backdropopacity, ...props }) => {
  if (variant === "fix") {
    return (
      <div className="relative w-fit h-fit">
        <Backdrop color={backdropcolor} opacity={backdropopacity} />
        <img src={src} className={`sy-image ${styling}`}/>
      </div>
      
    );
  } else {
    return (
      <div 
      className={`sy-image w-full h-full min-h-image md:min-h-0 ${styling}`}
      style={{
        backgroundImage: `url("${src}")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}>{children}<Backdrop color={backdropcolor} opacity={backdropopacity} /></div>
    );
  }
};

Image.propTypes = {
  variant: PropTypes.oneOf(['flex', 'fix']),
  backdropcolor: PropTypes.oneOf(['black', 'white']),
  backdropopacity: PropTypes.oneOf(['0', '20', '50', '80']),
  src: PropTypes.string,
};

Image.defaultProps = {
  variant: 'flex',
  src: 'https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
  backdropcolor: 'black',
  backdropopacity: '0',
};
