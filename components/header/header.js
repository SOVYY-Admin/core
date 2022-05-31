import React, { useEffect, useRef, useState } from "react";
import { useTheme } from 'next-themes'
import PropTypes from 'prop-types';
import styles from "./header.module.css";
import Link from 'next/link'
import { Button, IconButton, Stack, Drawer, List } from '../components';

// import api
import { getStrapiURL } from "/api/strapi";

 export const Header = ({data, sticky, styling, ...props }) => {

  // Theme
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div 
    className={`
    ${styles[`sy--header`]}
    ${sticky === true ? styles[`sy--sticky`] : ""}
    ${styling}  
    `}
    {...props}
    >
      <Stack gap="flex" orientation="horizontal" styling="items-center">
        <Stack gap="2" orientation="horizontal" styling="items-center ">
          <Link href="/"><a><img src={getStrapiURL(data.Logo.url)} className="max-w-fit h-6 block dark:hidden" /><img src={getStrapiURL(data.LogoDarkmode.url)} className="max-w-fit 1h-6 hidden dark:block" /></a></Link>  
          <List data={data.linkList} variant="ghost" stackOrientation="horizontal" stackGap="4" styling="ml-8 hidden md:block"/>
        </Stack >
        <Stack gap="2" orientation="horizontal" styling="items-center">
          {data.utilityButtons.map(button =><Button key={button.id} label={button.label} color="neutral" href={button.href} styling="hidden md:block"/>)}
          <Button key={data.actionButton.id} label={data.actionButton.label} href={data.actionButton.href} styling="hidden md:block"/>
          {theme === 'light' && <IconButton variant="ghost" icon="moon" label="Theme" onClick={toggleTheme}/>} 
          {theme === 'dark' && <IconButton variant="ghost" icon="sun" label="Theme" onClick={toggleTheme}/>} 
          <Drawer styling="md:hidden">
            <List data={data.linkList}/>
          </Drawer>
        </Stack>
      </Stack>
    </div>
  );
};

Header.propTypes = {
  data: PropTypes.object,
  sticky : PropTypes.bool,
  styling: PropTypes.string,
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
    "linkList": {
      "label": "headline",
      "links":[
      {"id":1,"label":"Item 1","href":"/1"},
      {"id":2,"label":"Item 2","href":"/2"},
      {"id":3,"label":"Item 3","href":"/3"},
      ]
    },
    "Buttons":[
      {"id":1,"label":"Neutral", "size":"medium", "variant":"outlined", "color":"neutral","endIcon":"arrow-right"},
      {"id":2,"label":"Primary", "size":"medium", "variant":"contained", "color":"primary","endIcon":"arrow-right"},
    ]
  },
  sticky: false,
  styling: '',
};
