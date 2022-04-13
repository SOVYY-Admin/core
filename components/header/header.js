import React from "react";
import PropTypes from 'prop-types';
import classes from "./header.css";
import Link from 'next/link'
import { Stack } from '../stack/stack';
import { TextLink } from '../textlink/textlink';
import { Button } from '../button/button';

 export const Header = ({data, ...props }) => {
  return (
    <div className={`sy-header`}
    {...props}>
      <Stack gap="flex" styling="items-center">
      <Stack gap="12" styling="items-center">
      <Stack gap="2" styling="items-center">
      <Link href="/logo"><a><img src={data.logo} className="h-6" /></a></Link>
      </Stack>
        <ul className="h-fit">
          <Stack gap="4">{data.links.map(link =><li><Link href={link.href}><a><Button variant="ghost" color="secondary" size="medium" label={link.label}/></a></Link></li>)}</Stack>
        </ul>
        </Stack >
        <Stack gap="2" styling="items-center">{data.buttons.map(button =><Button label={button.label} size={button.size} color={button.color} variant={button.variant} endIcon={button.endIcon}/>)}</Stack>
        </Stack>
    </div>
  );
};
TextLink.propTypes = {
  data: PropTypes.object
};

Header.defaultProps = {
  data: {
    "logo":{"img":"https://placeholder.com/wp-content/uploads/2018/10/placeholder-1.png","href":"/logo"},
    "links":[
    {"id":1,"label":"Link 1","href":"/1"},
    {"id":2,"label":"Link 2","href":"/2"},
    {"id":3,"label":"Link 3","href":"/3"},
    ],
    "buttons":[
      {"id":1,"label":"Secondary", "size":"medium", "variant":"outlined", "color":"secondary","endIcon":"arrow-right"},
      {"id":2,"label":"Primary", "size":"medium", "variant":"contained", "color":"primary","endIcon":"arrow-right"},
    ]
}
};
