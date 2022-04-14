import React from "react";
import PropTypes from 'prop-types';
import Link from 'next/link'
import styles from "./textlink.module.css";

 export const TextLink = ({ label, href, inline, ...props }) => {
  return (
    <Link href={href}>
      <a className={`      
      ${styles[`sy--textlink`]} 
      ${ inline === true ? `${styles[`sy--inline`]}` : ``}
      ${styling} 
      `}
      {...props}>
      {label}
      </a>
    </Link>
  );
};

TextLink.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  inline: PropTypes.bool,
  styling: PropTypes.string,
};

TextLink.defaultProps = {
  label: 'TextLink',
  href: '',
  inline: false,
  styling: '',
};
