import React from "react";
import PropTypes from 'prop-types';
import Link from 'next/link'
import classes from "./textlink.css";

 export const TextLink = ({ label, href, inline, ...props }) => {
  return (
    <Link href={href}><a className={`sy-textlink ${ inline === true ? "sy-textlink--inline" : ""}`}
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
};

TextLink.defaultProps = {
  label: 'TextLink',
  href: '',
  inline: false,
};
