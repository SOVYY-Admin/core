import React from "react";
import PropTypes from 'prop-types';
import styles from "./header.module.css";
import Link from 'next/link'
import { Stack } from '../stack/stack';
import { TextLink } from '../textlink/textlink';
import { Button } from '../button/button';

// import api
import { getStrapiURL } from "/api/strapi";

 export const Header = ({data, ...props }) => {
  return (
    <div 
    className={`
    ${styles[`sy--header`]} 
    `}
    {...props}
    >
      <Stack gap="flex" styling="items-center">
      <Stack gap="12" styling="items-center">
      <Stack gap="2" styling="items-center">
      <Link href="/logo"><a><img src={getStrapiURL(data.Logo.url)} className="max-w-fit h-6 block dark:hidden" /><img src={getStrapiURL(data.LogoDarkmode.url)} className="max-w-fit h-6 hidden dark:block" /></a></Link>
      </Stack>
        <ul className="h-fit">
          <Stack gap="4">{data.Links.map(link =><li key={link.id}><Link href={link.href}><a><Button variant="ghost" color="secondary" size="medium" label={link.label}/></a></Link></li>)}</Stack>
        </ul>
        </Stack >
        <Stack gap="2" styling="items-center">{data.Buttons.map(button =><Button key={button.id} label={button.label} size={button.size} color={button.color} variant={button.variant} endIcon={button.endIcon}/>)}</Stack>
        </Stack>
    </div>
  );
};
TextLink.propTypes = {
  data: PropTypes.object
};

Header.defaultProps = {
  data: {
    "Logo":{
      "url": "/uploads/logo_42e0459919.svg",
      "href":"/logo"
    },
    "LogoDarkmode":{
      "url": "/uploads/logo_65747cef2b.svg",
      "href":"/logo"
    },
    "Links":[
    {"id":1,"label":"Link 1","href":"/1"},
    {"id":2,"label":"Link 2","href":"/2"},
    {"id":3,"label":"Link 3","href":"/3"},
    ],
    "Buttons":[
      {"id":1,"label":"Secondary", "size":"medium", "variant":"outlined", "color":"secondary","endIcon":"arrow-right"},
      {"id":2,"label":"Primary", "size":"medium", "variant":"contained", "color":"primary","endIcon":"arrow-right"},
    ]
  } 
};
