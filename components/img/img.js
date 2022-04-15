import React from "react";
import PropTypes from 'prop-types';
import styles from "./img.module.css";
import Image from 'next/image'
import { Backdrop } from '../backdrop/backdrop';

 export const IMG = ({ variant, src, width, height, styling, backdropcolor, backdropopacity, ...props }) => {
  if (variant === "fix") {
    return (
      <div className={`relative w-full h-full ${styling}`}>
        <Backdrop color={backdropcolor} opacity={backdropopacity} />
        <Image
        src={src} 
        layout="responsive"
        width={width} 
        height={height}
        unoptimized
        className={`
        ${styles[`sy--image`]} 
        `}/>
      </div>
      
    );
  } else {
    return (
      <div className={`relative w-full h-full min-h-image md:min-h-0 ${styling}`}>
      <Backdrop color={backdropcolor} opacity={backdropopacity} />
      <Image
      src={src} 
      layout="fill"
      unoptimized
      className={`
      ${styles[`sy--image`]} 
      `}/>
    </div>
    );
  }
};

IMG.propTypes = {
  variant: PropTypes.oneOf(['flex', 'fix']),
  backdropcolor: PropTypes.oneOf(['black', 'white']),
  backdropopacity: PropTypes.oneOf(['o0', 'o20', 'o50', 'o80']),
  src: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

IMG.defaultProps = {
  variant: 'flex',
  src: 'https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
  backdropcolor: 'black',
  backdropopacity: 'o0',
  width: '2',
  height: '1',
};
