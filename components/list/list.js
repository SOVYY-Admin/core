import React from "react";
import PropTypes from 'prop-types';
import styles from "./list.module.css";
import Link from 'next/link'
// import components
import { Stack, Text } from '../components';

 export const List = ({ data, size, variant, dots, stackOrientation, stackGap, children, styling, ...props }) => {
  return (
    <ul className={`
    ${styles[`sy--list`]} 
    ${styling}
    ${dots === true ? styles[`sy--dots`] : ""}
    `}>
      <Stack orientation={stackOrientation} gap={stackGap }>
        {data.label === '' ? '' :  <Text variant="b2" styling="font-bold mb-0">{data.label}</Text> }
        {data.links.map(data => {  
          if (data.href != null && data.href != '')
            return  <Link key={data.id} href={data.href}>
                      <li 
                      className={`
                      ${styles[`sy--size--${size}`]}
                      ${styles[`sy--variant--${variant}`]} 
                      ${styles[`sy--clickable`]}
                      `}>
                        {data.label}
                      </li>
                    </Link>
            return  <li key={data.id} 
                    className={`
                    ${styles[`sy--size--${size}`]}
                    ${styles[`sy--variant--${variant}`]}
                    `}>
                      {data.label}
                    </li>
        })}
      </Stack>
    </ul> 
  );
};

List.propTypes = {
  size: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  variant: PropTypes.oneOf(['contained', 'text', 'ghost']),
  dots: PropTypes.bool,
  stackOrientation: PropTypes.string,
  stackGap: PropTypes.string,
  styling: PropTypes.string,
};

List.defaultProps = {
  data: {
    "label": "headline",
    "links":[
    {"id":1,"label":"Item 1","href":"/1"},
    {"id":2,"label":"Item 2","href":"/2"},
    {"id":3,"label":"Item 3","href":"/3"},
    ]
  },
  size: 'medium',
  variant: 'ghost',
  dots: false,
  stackOrientation: 'vertical',
  stackGap: '2',
  styling: '',
};
