import React from "react";
import PropTypes from 'prop-types';
import styles from "./content.module.css";
import { Grid, Text, IMG, Button, TextLink, Stack} from '../components';
// import api
import { getStrapiURL } from "/api/strapi";

 export const Content = ({data, variant, styling, ...props }) => {
  if (variant === 'IMGText') {
      return (
        <div className={`
        ${styles[`sy--content`]}
        ${styling}  
        `}>
          <Grid cols="1" mdcols="2">
            {data.image != undefined ? <IMG variant="fill" src={getStrapiURL(data.image.url)} styling="order-1" /> : ""}
            <div className="order-2">
              <Text variant="h6">{data.headline}</Text>
              <Text variant="b2" styling="mb-0">{data.text}</Text>
              <Stack gap="4">
                {data.buttons != undefined ? data.buttons.map(data => 
                    <Button label={data.label} href={data.href} styling="mt-6"/>
                ) : ""}
                {data.links != undefined ? data.links.map(data =>   
                  <TextLink label={data.label} href={data.href} styling="mt-6"/>
                ) : ""}
              </Stack>
            </div>
          </Grid>
        </div>
      ); 
  } else if (variant === 'TextIMG') {
    return (
      <div className={`
      ${styles[`sy--content`]}
      ${styling}  
      `}>
        <Grid cols="1" mdcols="2" gap="12">
          <div className="order-2 md:order-1">
            <Text variant="h6">{data.headline}</Text>
            <Text variant="b2" styling="mb-0">{data.text}</Text>
            <Stack gap="4">
              {data.buttons != undefined ? data.buttons.map(data => 
                  <Button label={data.label} href={data.href} styling="mt-6"/>
              ) : ""}
              {data.links != undefined ? data.links.map(data =>   
                <TextLink label={data.label} href={data.href} styling="mt-6"/>
              ) : ""}
            </Stack>
          </div> 
          {data.image.url != undefined ? <IMG variant="fill" src={getStrapiURL(data.image.url)} styling="order-1 md:order-2"/> : ""}
        </Grid>
      </div>
    );
  } else if (variant === 'TextHeadline') {
    return (
      <div className={`
      ${styles[`sy--content`]}
      ${styling}  
      `}>
        <Grid cols="1" mdcols="2" gap="12">
          <div className="order-2 md:order-1">
            <Text variant="b" styling="mb-0">{data.text}</Text>
            <Stack gap="4">
              {data.buttons != undefined ? data.buttons.map(data => 
                  <Button label={data.label} href={data.href} styling="mt-6"/>
              ) : ""}
              {data.links != undefined ? data.links.map(data =>   
                <TextLink label={data.label} href={data.href} styling="mt-6"/>
              ) : ""}
            </Stack>
          </div> 
          <div className="order-1 md:order-2">
            <Text variant="h6">{data.headline}</Text>
          </div> 
        </Grid>
      </div>
    );
  } else if (variant === 'HeadlineText') {
    return (
      <div className={`
      ${styles[`sy--content`]}
      ${styling}  
      `}>
        <Grid cols="1" mdcols="2" gap="12">
          <div className="order-1">
            <Text variant="h6">{data.headline}</Text>
          </div> 
          <div className="order-2">
            <Text variant="b" styling="mb-0">{data.text}</Text>
            <Stack gap="4">
             {data.buttons != undefined ? data.buttons.map(data => 
                  <Button label={data.label} href={data.href} styling="mt-6"/>
              ) : ""}
              {data.links != undefined ? data.links.map(data =>   
                <TextLink label={data.label} href={data.href} styling="mt-6"/>
              ) : ""}
            </Stack>
          </div> 
        </Grid>
      </div>
    );
  } else {
    return (
      <div className={`
      ${styles[`sy--content`]}
      ${styling}  
      `}>
        <Grid cols="1">
          <div className="order-2">
            <Text variant="h6">{data.headline}</Text>
            <Text variant="b2" styling="mb-0">{data.text}</Text>
            <Stack gap="4">
              {data.buttons != undefined ? data.buttons.map(data => 
                  <Button label={data.label} href={data.href} styling="mt-6"/>
              ) : ""}
              {data.links != undefined ? data.links.map(data =>   
                <TextLink label={data.label} href={data.href} styling="mt-6"/>
              ) : ""}
            </Stack>
          </div> 
          {data.image != undefined ? <IMG variant="fix" src={getStrapiURL(data.image.url)} /> : ""}
        </Grid>
      </div>
    );
  }
};

Content.propTypes = {
  variant: PropTypes.oneOf(['default', 'TextIMG', 'IMGText', 'TextHeadline', 'HeadlineText']),
  button: PropTypes.bool,
  link: PropTypes.bool,
  data: PropTypes.object,
  styling: PropTypes.string,
};

Content.defaultProps = {
  variant: 'default',
  button: false,
  link: false,
  data: {
    "headline": "Lorem Ipsum dolor sit amet",
    "text": "Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet",
    "image":{
      "url": "/uploads/mymind_w_HJ_5_L9_KG_Tl4_unsplash_419f4d7272.jpg",
      "alt":"Lorem Ipsum dolor sit amet"
    },
    "buttons":[
      ],
    "links":[
      ]
  },
  styling: '',
};
