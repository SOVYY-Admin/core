import React, { useEffect, useRef, useState } from "react";
import { useTheme } from 'next-themes'
import PropTypes from 'prop-types';
import styles from "./footer.module.css";
// import components
import { List, Section, Grid, Button, Stack, Divider, IconButton } from '../components';

 export const Footer = ({ data, styling, children, ...props }) => {

  return (
    <div className={`
    ${styles[`sy--footer`]} 
    ${styling} 
    `}>
        <Section>
          <Stack gap="8">
          <Divider orientation="vertical" />
            <Grid cols="2" mdcols="2" lgcols="2">
              <Stack gap="4">
              {data.linkLists.map(data =>   
                <List key={data.id} data={data} variant="ghost" stackOrientation="horizontal" stackGap="4" />
              )}
              {data.utilityButtons.map(button =><Button key={button.id} label={button.label} color="neutral" href={button.href} styling="hidden md:block"/>)}
              </Stack>
              <IconButton variant="ghost" icon="arrow-up" href="#" styling="justify-self-end"/>
            </Grid>
          </Stack>
      </Section>
    </div> 
  );
};

Footer.propTypes = {
  data: PropTypes.object,
  styling: PropTypes.string,
};

Footer.defaultProps = {
  data: {
    "LinkLists":[
      {"id":1,"label": "Category 1",
      "items":[
      {"id":1,"label":"Item 1","href":"/1"},
      {"id":2,"label":"Item 2","href":"/2"},
      {"id":3,"label":"Item 3","href":"/3"},
      ],},
      {"id":2,"label": "Category 2",
      "items":[
      {"id":1,"label":"Item 1","href":"/1"},
      {"id":2,"label":"Item 2","href":"/2"},
      {"id":3,"label":"Item 3","href":"/3"},
      ],},
      {"id":3,"label": "Category 3",
      "items":[
      {"id":1,"label":"Item 1","href":"/1"},
      {"id":2,"label":"Item 2","href":"/2"},
      {"id":3,"label":"Item 3","href":"/3"},
      ],},
      {"id":4,"label": "Category 4",
      "items":[
      {"id":1,"label":"Item 1","href":"/1"},
      {"id":2,"label":"Item 2","href":"/2"},
      {"id":3,"label":"Item 3","href":"/3"},
      ],},
    ]
  },
  styling: '',
};
