import React from "react";
import PropTypes from 'prop-types';
import styles from "./card.module.css";
import Link from 'next/link'
import { Grid, Text, IMG} from '../components';

 export const Card = ({children, href, styling, ...props }) => {
  if (href != null && href != '') {
      return (
        <Link href={href}>
          <div className={`
          ${styles[`sy--card`]}
          ${styles[`sy--clickable`]}
          ${styling}  
          `}>
          {children}
          </div>
        </Link>
      ); 
  } else {
    return (
      <div className={`
      ${styles[`sy--card`]}
      ${styling}  
      `}>
        {children}
      </div>
    );
  }
};

Card.propTypes = {
  href: PropTypes.string,
  styling: PropTypes.string,
};

Card.defaultProps = {
  href: '',
  styling: '',
};
